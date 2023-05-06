import * as React from "react";

import styled from "@emotion/styled";

import { MainLogo } from "@/components/Logo";
import { HowToUseBtn } from "@/components/Button";

export const MainHeader = () => {
  return (
    <HeaderContianer>
      <MainLogo />
      <HowToUseBtn />
    </HeaderContianer>
  );
};

const HeaderContianer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeadingAndSubHeading = () => {
  return (
    <Container>
      <SubHeading>1,300 rooms generated and counting</SubHeading>
      <Heading>Design your Dream Rooms</Heading>
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  margin-top: 5rem;
`;

const SubHeading = styled.h2`
  color: #0db2b2;
  font-size: 20px;
`;

const Heading = styled.h1`
  color: #ffffff;
  font-size: 82px;
  font-family: "Gilroy-Bold";
  font-weight: 500;
`;
