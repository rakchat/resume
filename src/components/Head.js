import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { useWidth } from "../theme/Breakpoint";

function Head() {
  const screenWidth = useWidth();
  console.log(screenWidth)
  return (
    <>
      <Box mb={10} sx={{ position: "relative" }}>
        <Box className="banner">
          <img
            className="img-banner"
            src={require("../images/resume-banner.jpg")}
            alt="banner"
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box className="profile">
            <img
              className="img-profile"
              src={require("../images/profile2.png")}
              alt="profile"
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: "relative" }}>
        <Box
          className="name"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {screenWidth === "xs" ? (
            <Typography
              variant="h5"
              sx={{ letterSpacing: "10px", textAlign: "center" }}
            >
              SUNTORN <br /> RAKCHAT
            </Typography>
          ) : (
            <Typography variant="h4" sx={{ letterSpacing: "10px" }}>
              SUNTORN RAKCHAT
            </Typography>
          )}
          {screenWidth === "xs" ? (
            <></>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ position: "absolute", right: 0, mr: 4 }}>
                <Typography sx={{ fontSize: "10px", color: "#a4a4a4" }}>
                  BIRTHDAY: 26 JUNE 1999
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          mt: 2,
          display: { xs: "flex", sm: "none" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "10px", color: "#a4a4a4" }}>
            BIRTHDAY: 26 JUNE 1999
          </Typography>
        </Box>
      </Box>
      <Divider
        sx={{
          my: 2,
          mx: 8,
          borderWidth: 2,
        }}
      />
    </>
  );
}

export default Head;
