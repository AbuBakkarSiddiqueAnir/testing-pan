import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styled from "@emotion/styled";

import MainContainer from "@/components/Contianer/MainContainer";

import google from "@/assets/google.png";
import facebook from "@/assets/facebook.png";
import mail from "@/assets/mail.png";

export default function SignInGoogle() {
  return (
    <>
      <Head>
        <title>Newroom | Sign in with Google</title>
        <meta name="description" content="Newroom app sign in with google" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <SignInHeader>Log in or Sign up in Seconds</SignInHeader>
        <SignInLabel>
          Use your email or another service to create a free account and
          redesign your room with our Al-powered interior design tool.
        </SignInLabel>
        <Container>
          <SingInButton href={"google.come"}>
            <Image
              style={{ marginRight: "5px" }}
              src={google}
              alt="Continue with Google"
            />
            <p>Continue with Google</p>
          </SingInButton>
          <SingInButton href={"google.come"}>
            <Image
              style={{ marginRight: "5px" }}
              src={facebook}
              alt="Continue with Facebook"
            />
            <p>Continue with Facebook</p>
          </SingInButton>
          <SingInButton href={"google.come"}>
            <Image
              style={{ marginRight: "5px" }}
              src={mail}
              alt="Continue with Email"
            />
            <p>Continue with Email</p>
          </SingInButton>
        </Container>
      </MainContainer>
    </>
  );
}

const SignInHeader = styled.h1`
  text-align: center;
  font-size: 82px;
  color: #fff;
  margin: 8rem 0 2rem;
`;

const SignInLabel = styled.p`
  font-size: 18px;
  color: #ffffff;
  margin: 0px 5rem;
  text-align: center;
  margin-top: 1rem;
`;

const Container = styled.div`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 12rem;
  text-align: -webkit-center;
`;

const SingInButton = styled(Link)`
  display: flex;
  align-items: center;
  color: #ffff;
  font-size: 18px;
  text-decoration: none;
  border: 1px solid #0db2b2;
  height: 62px;
  line-height: 62px;
  padding: 0 25px;
  border-radius: 5px;
  font-family: Quicksand-Regular;
  width: 15rem;
  margin: 1rem 0;
`;
