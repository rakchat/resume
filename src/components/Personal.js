import React from "react";
import { Box, Typography } from "@mui/material";

function Personal() {
  return (
    <>
      <Box sx={{ marginLeft: { xs: 0, sm: 4 } }}>
        <Box mb={1}>
          <Typography
            sx={{ mb: 2, color: "#a4a4a4", fontWeight: 500 }}
            variant="subtitle1"
          >
            EDUCATION
          </Typography>
          <Typography variant="subtitle2">
            <b>2018 - 2022</b>
          </Typography>
          <Typography variant="subtitle2" sx={{ ml: 2 }}>
            Suranaree University of Technology, Nakhon Ratchasima Bachelor of
            Information Science in Information Technology, GPAX 3.13
          </Typography>
        </Box>
        <Box mb={5}>
          <Typography variant="subtitle2">
            <b>2012 - 2017</b>
          </Typography>
          <Typography variant="subtitle2" sx={{ ml: 2 }}>
            Surathampitak School, Nakhon Ratchasima, High School
            Science-Mathematics, <br />
            GPAX 3.32
          </Typography>
        </Box>
        <Box mb={1}>
          <Typography
            sx={{ mb: 2, color: "#a4a4a4", fontWeight: 500 }}
            variant="subtitle1"
          >
            SKILLS
          </Typography>
          <Typography variant="subtitle2">
            <b>Languages</b>
          </Typography>
          <Typography variant="subtitle2" sx={{ ml: 2 }}>
            Thai, English
          </Typography>
        </Box>
        <Box mb={1}>
          <Typography variant="subtitle2">
            <b>Computer Skills</b>
          </Typography>
          <Typography variant="subtitle2" sx={{ ml: 2 }}>
            HTML, CSS, JavaScript, React(JS, TS), React Native, Node, UX/UI,
            Material-UI, <br /> Ant Design, MySQL, PostgreSQL, SQL
          </Typography>
        </Box>
        <Box mb={5}>
          <Typography variant="subtitle2">
            <b>Tools</b>
          </Typography>
          <Typography variant="subtitle2" sx={{ ml: 2 }}>
            Visual Studio Code, GitHub, GitLab, Postman, Sourcetree, Figma
            ,Slack , Discord, Microsoft Office, Adobe, Notepad++
          </Typography>
        </Box>
        <Box mb={1}>
          <Typography
            sx={{ mb: 2, color: "#a4a4a4", fontWeight: 500 }}
            variant="subtitle1"
          >
            WORK EXPERIENCE
          </Typography>
          <Typography variant="subtitle2">
            <b>2021 - 2022</b>
          </Typography>
          <Typography variant="subtitle2" sx={{ ml: 2 }}>
            Frontend Developer, iCreativeSystems Co., Ltd.
          </Typography>
        </Box>
        <Box mb={1}>
          <Typography variant="subtitle2">
            <b>2021 - 2021</b>
          </Typography>
          <Typography variant="subtitle2" sx={{ ml: 2 }}>
            Assistant Programmer (Trainee), iCreativeSystems Co., Ltd.
          </Typography>
        </Box>
        <Box mb={1}>
          <Typography variant="subtitle2">
            <b>2019 - 2021</b>
          </Typography>
          <Typography variant="subtitle2" sx={{ ml: 2 }}>
            Student employment, Suranaree University of Technology.
          </Typography>
        </Box>
        <Box mb={5}>
          <Typography variant="subtitle2">
            <b>2017 - 2021</b>
          </Typography>
          <Typography variant="subtitle2" sx={{ ml: 2 }}>
            Part-time position, Pasta Chef at The pizza company.
          </Typography>
        </Box>
        <Box mb={5}>
          <Typography
            sx={{ mb: 2, color: "#a4a4a4", fontWeight: 500 }}
            variant="subtitle1"
          >
            ACTIVITIES
          </Typography>
          <Typography variant="subtitle2">
            <b>2019 - 2022</b>
          </Typography>
          <Typography variant="subtitle2" sx={{ ml: 2 }}>
            President, Information of technology course Enterprise software(ES)
            at Suranaree University of Technology
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Personal;
