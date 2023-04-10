import ResponsiveAppBar from "../components/modules/header";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import me from "../../public/me.jpg";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <ResponsiveAppBar />
      <Grid container sx={{ height: "100vh" }}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              height: "100%",
              backgroundImage: `url(${me.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              px: 4,
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              color="#202123"
            >
              Hi, I am Riku Kisako
            </Typography>
            <Typography variant="body1" component="p" color="#202123">
              名古屋大学情報学部コンピュータ科学科知能システム学専攻B3 木迫璃玖
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
