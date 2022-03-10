import React from "react";
import "./HomeCSS.css";
import { Box, Container, Grid, Divider } from "@mui/material";
import Head from "../components/Head";
import Profile from "../components/Profile";
import Personal from "../components/Personal";

function Home() {
  return (
    <>
      <Container maxWidth="md">
        <Box className="Container" sx={{ backgroundColor: "#fff" }}>
          <Head />
          <Box mx={8} mt={4}>
            <Grid container>
              <Grid item xs={12} sm={5.5}>
                <Profile />
              </Grid>
              <Grid item xs={0.5}>
                <Divider orientation="vertical" sx={{ display: "flex" }} />
              </Grid>
              <Grid item xs={12} sm={5.5}>
                <Personal />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Home;
