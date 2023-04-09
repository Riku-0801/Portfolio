import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import { getDatabase } from "../lib/notion";
import ResponsiveAppBar from "../components/modules/header";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
const inter = Inter({ subsets: ["latin"] });
export const databaseId = process.env.NOTION_WORKS_ID;
export default function Work({ posts }) {
  const rposts = posts.reduceRight((p, c) => [...p, c], []);
  return (
    <>
      <ResponsiveAppBar />
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {rposts
          .filter((post) => post.properties.publish.checkbox)
          .map((post) => {
            return (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <a
                  key={post.id}
                  href={`${post.properties.URL.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "block", textAlign: "center" }}
                >
                  <Card
                    sx={{
                      maxWidth: 500,
                      display: "inline-block",
                      minHeight: 350,
                      marginTop: 5,
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image={post.cover.file.url}
                        alt={post.properties.Name.title[0]["plain_text"]}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {post.properties.Name.title[0]["plain_text"]}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ textAlign: "left" }}
                        >
                          {
                            post.properties.description.rich_text[0][
                              "plain_text"
                            ]
                          }
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </a>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}
export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
