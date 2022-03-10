import React from "react";
import { Box, Typography } from "@mui/material";

function Profile() {
  return (
    <>
      <Box mb={9}>
        <Typography
          sx={{ mb: 2, color: "#a4a4a4", fontWeight: 500 }}
          variant="subtitle1"
        >
          PROFILE
        </Typography>
        <Typography variant="subtitle2">
          I'm robust problem-solving skills in a test-driven environment, To
          work in a position related to information technology where I can apply
          my knowledge and skills in web programming. Every problem is a gift -
          without problems, We would not grow.
        </Typography>
      </Box>
      <Box mb={9}>
        <Typography
          sx={{ mb: 2, color: "#a4a4a4", fontWeight: 500 }}
          variant="subtitle1"
        >
          PERSONAL
        </Typography>
        <Typography variant="subtitle2">
          Ability to quickly learn and apply new thing.Ability to work well
          under pressure. Good cooperative skills. Flexible, patient, friendly
          and open-minded.
        </Typography>
      </Box>
      <Box mb={9}>
        <Typography
          sx={{ mb: 2, color: "#a4a4a4", fontWeight: 500 }}
          variant="subtitle1"
        >
          CONTACT
        </Typography>
        <Typography variant="subtitle2">
          41/5 Soi Wuttiporn 2, Suebsiri 36 Road, Nongjabok, Mueang Nakhon
          Ratchasima, Nakhon Ratchasima 30000 Tel. 090-818-5641 Email:
          rakchat.sun@gmail.com
        </Typography>
      </Box>
      <Box mb={9}>
        <Typography
          sx={{ mb: 2, color: "#a4a4a4", fontWeight: 500 }}
          variant="subtitle1"
        >
          REFERENCES
        </Typography>
        <Typography variant="subtitle2">
          <b>Asst. Prof. Dr. Jitimon Angskun </b>
          <br /> School of Information Technology Institute of Social Technology
          Suranaree University of Technology <br /> Tel. 044-224309 <br />
          E-mail: jitimon@sut.ac.th
          <br />
          <br />
          <b>Asst. Prof. Dr. Satidchoke Phosaard</b>
          <br /> School of Information Technology Institute of Social Technology
          Suranaree University of Technology
          <br /> Tel.044-224369
          <br />
          E-mail: s@sut.ac.th
        </Typography>
      </Box>
    </>
  );
}

export default Profile;
