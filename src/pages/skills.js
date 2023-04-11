import { getDatabase } from "../lib/notion";
import { saveImageIfNeeded } from "../lib/saveImage";
import ResponsiveAppBar from "../components/modules/header";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
export const databaseId = process.env.NOTION_SKILLS_ID;
export default function Skill({ posts }) {
  const rposts = posts.reduceRight((p, c) => [...p, c], []);
  return (
    <>
      <ResponsiveAppBar />
      <Grid container justifyContent="space-between" alignItems="center">
        {rposts
          .filter((post) => post.properties.publish.checkbox)
          .map((post) => {
            return (
              <Grid item key={post.id} margin="auto">
                <Card
                  sx={{
                    maxWidth: 345,
                    minHeight: 300,
                    marginTop: 5,
                  }}
                  style={{ backgroundColor: "#f2f2f2" }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      sx={{
                        height: 140,
                        width: "auto",
                        display: "block",
                        margin: "auto",
                      }}
                      image={"/tmpImages/" + post.id + ".png"}
                      alt={post.properties.Name.title[0]["plain_text"]}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {post.properties.Name.title[0]["plain_text"]}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {post.properties.description.rich_text[0]["plain_text"]}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  database.map((data) => saveImageIfNeeded(data));
  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
