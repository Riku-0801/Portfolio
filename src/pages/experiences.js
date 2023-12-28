import { getDatabase } from "../lib/notion";
import ResponsiveAppBar from "../components/modules/header";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const databaseId = process.env.NOTION_EXPERIENCE_ID;

export default function Experience({ posts }) {
  var count = 0;
  const rposts = posts.reduceRight((p, c) => [...p, c], []);
  return (
    <>
      <ResponsiveAppBar />
      <Timeline position="alternate">
        {rposts
          .filter((post) => post.properties.publish.checkbox)
          .map((post) => {
            count += 1;
            return (
              <TimelineItem key={post.id}>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent align-items="center">
                  <Card
                    sx={{
                      maxWidth: 600,
                      marginLeft: count % 2 === 0 ? "auto" : 0,
                    }}
                  >
                    <CardContent text-align="left">
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                        textAlign="left"
                      >
                        {post.properties.period.rich_text[0]["plain_text"]}
                      </Typography>
                      <Typography variant="h5" component="div" textAlign="left">
                        {post.properties.Name.title[0]["plain_text"]}
                      </Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                        textAlign="left"
                      >
                        {post.properties.role.rich_text[0]["plain_text"]}
                      </Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                        textAlign="left"
                      >
                        {post.properties.technology.rich_text[0]["plain_text"]}
                      </Typography>
                      <Typography variant="body2" textAlign="left">
                        {post.properties.description.rich_text[0]["plain_text"]}
                      </Typography>
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            );
          })}
      </Timeline>
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
