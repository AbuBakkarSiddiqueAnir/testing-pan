import * as React from "react";
import Image from "next/image";

import styled from "@emotion/styled";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import twitter from "@/assets/twitter.png";
import youtube from "@/assets/youtube.png";
import instagram from "@/assets/instagram.png";
import tiktok from "@/assets/tiktok.png";

export const Footer = () => {
  return (
    <Contianer>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <FooterText>Contact support: contact@newroom.io</FooterText>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{ textAlign: "right", alignSelf: "center" }}
        >
          <SocialImage src={twitter} alt="Twitter" />
          <SocialImage src={youtube} alt="Youtube" />
          <SocialImage src={instagram} alt="Instagram" />
          <SocialImage src={tiktok} alt="Tiktok" />
        </Grid>
      </Grid>
    </Contianer>
  );
};

const Contianer = styled(Container)`
  border-top: 1px solid #5f5f5f;
  min-height: 120px;
  line-height: 120px;
`;

const SocialImage = styled(Image)`
  margin: 0 10px;
`;

const FooterText = styled.p`
  color: #ffff;
  font-size: 18px;
  font-weight: 100;
`;
