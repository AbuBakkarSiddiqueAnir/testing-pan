import Head from "next/head";

import styled from "@emotion/styled";
import Lottie from "react-lottie";

import MainContainer from "@/components/Contianer/MainContainer";
import { HeadingAndSubHeading } from "@/components/Header";
import { CreditInfo } from "@/components/CreditInfo";
import loadingAnimation from "@/assets/animation/loadingAnimation.json";

export default function RoomDesign() {
  return (
    <>
      <Head>
        <title>Newroom | Loading</title>
        <meta name="description" content="Newroom app loading" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <HeadingAndSubHeading />
        <CreditInfo />
        <LoadingAnimationContainer>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: loadingAnimation,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={400}
            width={400}
          />
        </LoadingAnimationContainer>
        <SitTight>Sit Tight</SitTight>
        <SitTightTag>
          and watch the <BoldText>magic unfold!</BoldText>
        </SitTightTag>
      </MainContainer>
    </>
  );
}

const LoadingAnimationContainer = styled.div`
  height: 280px;
`;

const SitTight = styled.p`
  color: #fff;
  font-size: 52px;
  font-weight: bold;
  text-align: center;
`;

const BoldText = styled.span`
  color: #0db2b2;
  font-weight: bold;
`;

const SitTightTag = styled.p`
  text-align: center;
  color: #fff;
  font-size: 30px;
  margin-bottom: 10rem;
`;
