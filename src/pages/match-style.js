import Head from "next/head";

import styled from "@emotion/styled";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import MainContainer from "@/components/Contianer/MainContainer";
import { HeadingAndSubHeading } from "@/components/Header";
import { CreditInfo } from "@/components/CreditInfo";
import { FormLabel } from "@/components/Text";

export default function RoomDesign() {
  return (
    <>
      <Head>
        <title>Newroom | Sign in with Google</title>
        <meta name="description" content="Newroom app sign in with google" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <HeadingAndSubHeading />
        <CreditInfo />
        <Container>
          <FormControl sx={{ m: 1, minWidth: "60%" }}>
            <FormLabel number={1} text={"Choose your room type"} />
            <SelectStyled>
              <MenuItem value="">Normal Photo</MenuItem>
            </SelectStyled>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: "60%" }}>
            <FormLabel number={2} text={"Snap or upload your room photo"} />
            <FileDragAndDrop>
              <UploadButton>Upload your room Photo</UploadButton>
              <SnapButton>Snap your Room</SnapButton>
            </FileDragAndDrop>
          </FormControl>
          <SubmitButton>Design your Room</SubmitButton>
        </Container>
      </MainContainer>
    </>
  );
}

const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
`;

const SelectStyled = styled(Select)`
  border: 1px solid #fff;
`;

const FileDragAndDrop = styled.div`
  border: 1px solid #fff;
  height: 300px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UploadButton = styled(Button)`
  height: 52px;
  background: #109797;
  text-transform: none;
  color: #fff;
  padding: 0px 15px;
  margin: 1rem 0;
  width: 14rem;
`;

const SnapButton = styled(Button)`
  height: 52px;
  background: #109797;
  text-transform: none;
  color: #fff;
  padding: 0px 15px;
  background: none;
  border: 1px solid #0db2b2;
  margin: 1rem 0;
  width: 14rem;
`;

const SubmitButton = styled(Button)`
  height: 52px;
  background: #ffffff;
  text-transform: none;
  color: #0db2b2;
  padding: 0px 15px;
  margin-top: 1rem;
  font-weight: bold;
  font-size: 18px;
`;
