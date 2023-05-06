import * as React from "react";

import styled from "@emotion/styled";

const TEXT = "1,300 rooms generated and counting";

export const SubHeading = () => {
  return <h3>{TEXT}</h3>;
};

export const FormLabel = ({ number, text }) => {
  return (
    <LabelContainer>
      <LabelNumber>{number}</LabelNumber>
      <LabelText>{text}</LabelText>
    </LabelContainer>
  );
};

const LabelContainer = styled.div`
  display: flex;
  margin: 0.7rem 0;
`;

const LabelNumber = styled.p`
  height: 20px;
  width: 20px;
  background: #d9d9d9;
  color: #000;
  border-radius: 5px;
  margin-right: 5px;
  text-align: center;
`;

const LabelText = styled.p`
  color: #fff;
`;
