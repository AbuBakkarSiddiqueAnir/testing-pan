import Head from "next/head";

import InputBase from "@mui/material/InputBase";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";

import MainContainer from "@/components/Contianer/MainContainer";

export default function LoginVerification() {
  return (
    <>
      <Head>
        <title>Newroom | Email Singup</title>
        <meta name="description" content="Newroom app Email Singup" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <SignInHeader>Finish logging in</SignInHeader>
        <SignInLabel>
          Once you enter the code we sent to julie@example.com, you'll be all
          logged in.
        </SignInLabel>
        <Container>
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid item sx={12} sm={8}>
              <InputLabel>Code</InputLabel>
              <InputEmail
                placeholder="Enter code"
                inputProps={{ "aria-label": "Enter code" }}
              />
            </Grid>
          </Grid>
          <ContinueButton>continue</ContinueButton>
          <ResendText>
            Didn't get the code? <HightLightText>Resend code</HightLightText>
          </ResendText>
        </Container>
      </MainContainer>
    </>
  );
}

const ResendText = styled.p`
  font-size: 18px;
  color: #fff;
`;

const HightLightText = styled.span`
  color: #0db2b2;
`;

const InputLabel = styled.p`
  text-align: left;
  font-size: 18px;
  padding: 0.5rem 0;
  color: #fff;
  font-weight: bold;
`;

const InputEmail = styled(InputBase)`
  border: 1px solid #fff;
  height: 76px;
  border-radius: 5px;
  font-size: 16px;
  padding: 0rem 2rem;
  color: #fff;
  width: 100%;
`;

const SignInHeader = styled.h1`
  text-align: center;
  font-size: 52px;
  color: #fff;
  margin: 8rem 0 1rem;
  font-family: "Gilroy-Bold";
`;

const SignInLabel = styled.p`
  font-size: 18px;
  color: #ffffff;
  margin: 0px 5rem;
  text-align: center;
  margin-top: 1rem;
`;

const Container = styled.div`
  margin-top: 2rem;
  margin-bottom: 12rem;
  text-align: center;
`;

const ContinueButton = styled(Button)`
  background: #109797;
  color: #ffff;
  font-size: 18px;
  text-decoration: none;
  height: 52px;
  padding: 0rem 3rem;

  border-radius: 5px;
  text-transform: none;
  margin: 1rem 0;
`;
