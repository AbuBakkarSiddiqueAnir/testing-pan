import Link from "next/link";
import { debounce } from "lodash";

import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import Image from "next/image";
// import { Pannellum } from "pannellum-react";
import { Pannellum } from "pannellum-next-revised-anir";
import "pannellum-next-revised-anir/es/css/pannellum.css";
import "pannellum-next-revised-anir/es/css/style-textInfo.css";

import userFeeback from "@/assets/userFeeback.png";
import plusCircle from "@/assets/plusCircle.png";
import normal1 from "@/assets/normal1.png";
import normal2 from "@/assets/normal2.png";
import Rectangle175 from "@/assets/Rectangle175.png";
import Rectangle196 from "@/assets/Rectangle196.png";
import Rectangle195 from "@/assets/Rectangle195.png";
import Rectangle197 from "@/assets/Rectangle197.png";
import Rectangle184 from "@/assets/Rectangle184.png";
import Rectangle185 from "@/assets/Rectangle185.png";
import Rectangle188 from "@/assets/Rectangle188.png";
import Rectangle192 from "@/assets/Rectangle192.png";
import Rectangle193 from "@/assets/Rectangle193.png";
import Rectangle194 from "@/assets/Rectangle194.png";

import { faqQuestions } from "../../constant";
import { useRef, useState } from "react";

export const Home = () => {

  const pano1Ref = useRef(null);
  const pano2Ref = useRef(null);

  let pannellum1  = false;
  let pannellum2 = false;

  const config = {
    showZoomCtrl: false,
    showControls: false,
    autoLoad: true,
  };

  const togglePannellum = (arg) => {
    if(arg === '1') {
      pannellum1 = true;
      pannellum2 = false;
    } else if(arg === '2') {
      pannellum1 = false;
      pannellum2 = true;
    }
  }

  // const renderPannellum1 = () => {
  //   if(!pannellum1) return
  //   let newYaw = pano1Ref.current.getViewer().getYaw()
  //   let newPitch = pano1Ref.current.getViewer().getPitch()
  //   pano2Ref.current.getViewer().setPitch(newPitch)
  //   pano2Ref.current.getViewer().setYaw(newYaw)
  // }

const renderPannellum1 = () => {


  if (!pannellum1) return;
  let newYaw = pano1Ref.current.getViewer().getYaw();
  let newPitch = pano1Ref.current.getViewer().getPitch();
  console.log(newYaw, newPitch);
  pano2Ref.current.getViewer().setPitch(newPitch);
  pano2Ref.current.getViewer().setYaw(newYaw);
  return







  const renderPannellum = debounce(() => {
    if (!pannellum1) return;
    let newYaw = pano1Ref.current.getViewer().getYaw();
    let newPitch = pano1Ref.current.getViewer().getPitch();
    console.log(newYaw, newPitch);
    pano2Ref.current.getViewer().setPitch(newPitch);
    pano2Ref.current.getViewer().setYaw(newYaw);
  }, 100);
  renderPannellum()

  if (!pannellum1) return;
  // let newYaw = pano1Ref.current.getViewer().getYaw();
  // let newPitch = pano1Ref.current.getViewer().getPitch();

  // let intervalId = setInterval(() => {
    pano2Ref.current.getViewer().setPitch(newPitch);
    pano2Ref.current.getViewer().setYaw(newYaw);
  // }, 500);

  // // Clear interval after 1 second
  // setTimeout(() => {
  //   clearInterval(intervalId);
  // }, 500);

};

  const renderPannellum2 = () => {
    if(!pannellum2) return
    let newYaw = pano2Ref.current.getViewer().getYaw()
    let newPitch = pano2Ref.current.getViewer().getPitch()
    pano1Ref.current.getViewer().setPitch(newPitch)
    pano1Ref.current.getViewer().setYaw(newYaw)
  }

  return (
    <Container>
      <SubHeading>1,300 rooms generated and counting</SubHeading>
      <Heading>
        Design your Dream Rooms
        <br />
        with Al.
      </Heading>
      <Tag>Transform Your Space with Our 100% Free Al Themes:</Tag>
      <StrongTag>
        See Your Room in a New Light from Normal Photos to 360 Views.
      </StrongTag>
      <DesignDreamRoom href="/room-design">
        Design your dream room
      </DesignDreamRoom>
      <PreviewContainer>
        <PreviewTitle>Normal Photos</PreviewTitle>
        <Grid container columnSpacing={{ xs: 1 }}>
          <Grid item xs={12} sm={6}>
            <PreviewLabel>Before</PreviewLabel>
            <PreviewImage src={normal1} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PreviewLabel>After</PreviewLabel>
            <PreviewImage src={normal2} />
          </Grid>
        </Grid>
      </PreviewContainer>
      <PreviewContainer>
        <PreviewTitle>360 Photos</PreviewTitle>
        <Grid container>
          <Grid item xs={12} sm={6} sx={{ padding: "2rem" }}>
            <PreviewLabel>Before</PreviewLabel>
            <Pannellum
              width="500px"
              height="400px"
              image="https://static.vecteezy.com/system/resources/previews/002/081/165/large_2x/360-panorama-of-an-empty-modern-interior-room-in-3d-rendering-free-photo.jpg"
              config={config}
              northOffset={44}
              pitch={0}
              yaw={0}
              autoLoad
              id='1'
              onMousedown={()=>togglePannellum('1')}
              ref={pano1Ref}
              onRender={renderPannellum1}
            />

          </Grid>
          <Grid item xs={12} sm={6} sx={{ padding: "2rem" }}>
            <PreviewLabel>After</PreviewLabel>
            <Pannellum
              width="500px"
              height="400px"
              image="https://static.vecteezy.com/system/resources/previews/002/081/165/large_2x/360-panorama-of-an-empty-modern-interior-room-in-3d-rendering-free-photo.jpg"
              config={config}
              pitch={0}
              northOffset={44}
              id='2'
              yaw={0}
              autoLoad
              ref={pano2Ref}
              onMousedown={()=>togglePannellum('2')}
               onRender={renderPannellum2}
            />
          </Grid>
        </Grid>
      </PreviewContainer>
      <HowToUseContainer>
        <HowToUseTag>How to Use?</HowToUseTag>
        <HowToUseDescription>Step-by-Step Guide</HowToUseDescription>
        <StepsContainer>
          <Grid container sx={{ alignItems: "center" }}>
            <Grid item sm={5}>
              <LeftStep>
                <LeftStepCount>
                  <StepText>Step</StepText>
                  <Count>01</Count>
                </LeftStepCount>
                <StepDescription>
                  Click the "Design your dream room" button above.
                </StepDescription>
              </LeftStep>
            </Grid>
            <Grid item sm={2}>
              <MeterContainer>
                <Meter />
                <LeftLine />
                <CenterLine />
              </MeterContainer>
            </Grid>
            <Grid item sm={5}></Grid>
          </Grid>
          <Grid container sx={{ alignItems: "center" }}>
            <Grid item sm={5}></Grid>
            <Grid item sm={2}>
              <MeterContainer>
                <Meter />
                <RightLine />
                <CenterLine />
              </MeterContainer>
            </Grid>
            <Grid item sm={5}>
              <RightStep>
                <StepDescription>
                  Choose the photo type you prefer: "Normal Photos" or "360
                  Photos".
                </StepDescription>
                <RightStepCount>
                  <StepText>Step</StepText>
                  <Count>02</Count>
                </RightStepCount>
              </RightStep>
            </Grid>
          </Grid>
          <Grid container sx={{ alignItems: "center" }}>
            <Grid item sm={5}>
              <LeftStep>
                <LeftStepCount>
                  <StepText>Step</StepText>
                  <Count>03</Count>
                </LeftStepCount>
                <StepDescription>
                  Select the type of room you want to remodel.
                </StepDescription>
              </LeftStep>
            </Grid>
            <Grid item sm={2}>
              <MeterContainer>
                <Meter />
                <LeftLine />
                <CenterLine />
              </MeterContainer>
            </Grid>
            <Grid item sm={5}></Grid>
          </Grid>
          <Grid container sx={{ alignItems: "center" }}>
            <Grid item sm={5}></Grid>
            <Grid item sm={2}>
              <MeterContainer>
                <Meter />
                <RightLine />
                <CenterLine />
              </MeterContainer>
            </Grid>
            <Grid item sm={5}>
              <RightStep>
                <StepDescription>
                  Select the type of theme you want to apply to your room.
                </StepDescription>
                <RightStepCount>
                  <StepText>Step</StepText>
                  <Count>04</Count>
                </RightStepCount>
              </RightStep>
            </Grid>
          </Grid>
          <Grid container sx={{ alignItems: "center" }}>
            <Grid item sm={5}>
              <LeftStep>
                <LeftStepCount>
                  <StepText>Step</StepText>
                  <Count>05</Count>
                </LeftStepCount>
                <StepDescription>Upload your photo.</StepDescription>
              </LeftStep>
            </Grid>
            <Grid item sm={2}>
              <MeterContainer>
                <Meter />
                <LeftLine />
                <CenterLine />
              </MeterContainer>
            </Grid>
            <Grid item sm={5}></Grid>
          </Grid>
          <Grid container sx={{ alignItems: "center" }}>
            <Grid item sm={5}></Grid>
            <Grid item sm={2}>
              <MeterContainer>
                <Meter />
                <RightLine />
                <CenterLine />
              </MeterContainer>
            </Grid>
            <Grid item sm={5}>
              <RightStep>
                <StepDescription>
                  Click "Design Your Room" and wait for the magic to happen.
                </StepDescription>
                <RightStepCount>
                  <StepText>Step</StepText>
                  <Count>06</Count>
                </RightStepCount>
              </RightStep>
            </Grid>
          </Grid>
        </StepsContainer>
      </HowToUseContainer>
      <OutputSample>
        <Grid container direction="row">
          <Grid container item xs={12} sm={5}>
            <Grid item>
              <SampleOutputTag>
                More Options,
                <br />
                Better Choices
              </SampleOutputTag>
            </Grid>
            <Grid item>
              <SampleOutputDescription>
                With the Variation Results feature, you don't have to settle for
                just 1 design, you can receive up to 4 different design options
                in a single generation, allowing you to choose the most
                desirable one and download it. This feature gives you the
                ability to explore different styles and find the perfect design
                for your room.
              </SampleOutputDescription>
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={7}>
            <CarasoleContainer>
              <Image src={Rectangle175} />
              <Image196 src={Rectangle196} />
              <Image195 src={Rectangle195} />
              <Image197 src={Rectangle197} />
              <Image184 src={Rectangle184} />
              <Image185 src={Rectangle185} />
            </CarasoleContainer>
          </Grid>
        </Grid>
      </OutputSample>
      <BeforeAfterContainer>
        <Grid container>
          <Grid item container xs={12} sm={6}>
            <Grid constainer xs={12} sm={6}>
              <Grid item>
                <Image src={Rectangle188} />
                <DecoratedText>Before</DecoratedText>
              </Grid>
              <Grid item>
                <Image src={Rectangle193} />
                <DecoratedText>Before</DecoratedText>
              </Grid>
            </Grid>
            <Grid constainer xs={12} sm={6}>
              <Grid item>
                <Image src={Rectangle192} />
                <DecoratedText>After</DecoratedText>
              </Grid>
              <Grid item>
                <Image src={Rectangle194} />
                <DecoratedText>After</DecoratedText>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container xs={12} sm={6}>
            <DesignConsistency>
              Consistency in Design
              <br />
              Made Easy
            </DesignConsistency>
            <ConsistencyText>
              If you loved the design of your previous room and want to maintain
              the same theme setting for multiple rooms in your house, our Match
              Style feature is here to help. Simply click the button after
              generating your room photo, and our Al- powered tool will generate
              similar style options for your other rooms. This feature not only
              saves you time, but it also ensures consistency in design,
              especially if you're an interior designer.
            </ConsistencyText>
          </Grid>
        </Grid>
      </BeforeAfterContainer>
      <FAQContainer>
        <FAQTag>FAQ</FAQTag>
        {faqQuestions.map((question, index) => (
          <FAQCard key={index}>
            <FAQQuestion>{question}</FAQQuestion>
            <FAQToggle src={plusCircle} />
          </FAQCard>
        ))}
      </FAQContainer>
      <FeedbackContainer>
        <FeedbackHeading>What Our Users Are Saying</FeedbackHeading>
        <FeedbackSubheading>
          Reviews from Over 13,000 Satisfied Customers
        </FeedbackSubheading>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 12, sm: 6, md: 4 }}
          style={{ marginTop: "1rem", justifyContent: "center" }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item key={index}>
              <FeedbackCard>
                <Grid container item xs={12}>
                  <Grid item xs={3}>
                    <Image src={userFeeback} style={{ margin: "1rem" }} />
                  </Grid>
                  <Grid item xs={9}>
                    <FeedbackUser>Sarah Johnson</FeedbackUser>
                    <FeedbackUserJob>Interior Designer</FeedbackUserJob>
                  </Grid>
                </Grid>
                <UserFeeback>
                  "I was blown away by how easy it was to use this AI-powered
                  tool. The results were stunning and my clients loved it!"
                </UserFeeback>
              </FeedbackCard>
            </Grid>
          ))}
        </Grid>
      </FeedbackContainer>
      <FooterBanner>
        <FooterTag>Ready to design your dream room?</FooterTag>
        <FooterSubTag>
          Try our free Al room design tool and experience the power of
          Al-powered
          <br />
          interior design software today!
        </FooterSubTag>
        <DesignDreamRoom href="/room-design">
          Design your dream room
        </DesignDreamRoom>
      </FooterBanner>
    </Container>
  );
};

const CenterLine = styled.div`
  width: 2px;
  background: #fff;
  height: 100%;
  position: absolute;
  left: 50%;
`;

const MeterContainer = styled.div`
  position: relative;
  height: 170px;
`;

const LeftLine = styled.div`
  width: 50%;
  border: 1px solid #fff;
  position: absolute;
  top: 50%;
  z-index: 6000;
`;
const RightLine = styled.div`
  width: 50%;
  border: 1px solid #fff;
  position: absolute;
  top: 50%;
  z-index: 6000;
  margin-left: 50%;
`;

const Meter = styled.div`
  width: 20px;
  background: #0db2b2;
  height: 20px;
  border-radius: 100%;
  border: 2px solid #ffffff;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 6001;
`;

const StepsContainer = styled.div`
  margin: 3rem 0;
`;

const LeftStep = styled.div`
  display: flex;
  background: #223238;
  height: 7rem;
  color: #fff;
  border-radius: 4rem 10px 10px 4rem;
`;

const RightStep = styled.div`
  display: flex;
  background: #223238;
  height: 7rem;
  color: #fff;
  border-radius: 10px 4rem 4rem 10px;
`;

const LeftStepCount = styled.div`
  width: 6rem;
  border: 0.9rem solid #0e1a1f;
  border-radius: 100%;
`;

const RightStepCount = styled.div`
  width: 7rem;
  border: 0.9rem solid #0e1a1f;
  border-radius: 100%;
`;

const StepText = styled.p`
  margin-top: 0.7rem;
  font-size: 17px;
`;

const Count = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

const StepDescription = styled.p`
  font-size: 16px;
  align-self: center;
  padding: 0 1rem;
  text-align: left;
  font-family: "Quicksand";
  font-weight: bold;
`;

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

const Tag = styled.p`
  color: #ffffff;
  font-size: 18px;
  margin-top: 0.8rem;
`;

const StrongTag = styled.p`
  color: #ffffff;
  font-weight: bold;
  margin-top: 0.4rem;
  font-size: 18px;
`;

const DesignDreamRoom = styled(Link)`
  color: #ffff;
  font-size: 18px;
  text-decoration: none;
  height: 60px;
  line-height: 60px;
  padding: 0 40px;
  border-radius: 5px;
  font-family: "Quicksand";
  font-weight: bold;
  display: inline-block;
  background: #0db2b2;
  margin: 2rem 0;
`;

const HowToUseContainer = styled.div``;

const HowToUseTag = styled.p`
  color: #fff;
  font-size: 52px;
  font-weight: bold;
`;

const HowToUseDescription = styled.p`
  color: #fff;
  font-size: 36px;
  font-weight: bold;
`;

const PreviewContainer = styled.div`
  margin-bottom: 4rem;
`;

const PreviewTitle = styled.p`
  font-size: 52px;
  font-weight: bold;
  color: #fff;
`;

const PreviewLabel = styled.p`
  font-size: 20px;
  margin: 1rem;
  color: #fff;
`;

const PreviewImage = styled(Image)``;

const OutputSample = styled.div`
  padding: 14rem 0;
  padding-top: 5rem;
`;

const SampleOutputTag = styled.p`
  color: #fff;
  font-size: 35px;
  font-weight: bold;
  text-align: left;
  margin-top: 4rem;
`;

const SampleOutputDescription = styled.p`
  font-size: 18px;
  color: #fff;
  text-align: left;
`;

const CarasoleContainer = styled.div`
  position: absolute;
`;

const Image197 = styled(Image)`
  position: absolute;
  top: 50%;
  left: 58%;
  z-index: 6002;
`;

const Image195 = styled(Image)`
  position: absolute;
  left: 50%;
  top: 56%;
`;

const Image196 = styled(Image)`
  position: absolute;
  top: 66%;
  left: 46%;
`;

const Image184 = styled(Image)`
  position: absolute;
  top: 56%;
  left: 86%;
  z-index: 6001;
`;

const Image185 = styled(Image)`
  position: absolute;
  top: 66%;
  left: 111%;
`;

const BeforeAfterContainer = styled.div``;

const DesignConsistency = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  margin-top: 10rem;
  text-align: left;
  height: 0;
`;

const ConsistencyText = styled.p`
  font-size: 18px;
  color: #fff;
  text-align: left;
`;

const DecoratedText = styled.p`
  color: #fff;
  font-weight: bold;
  border-left: 3px solid #0db2b2;
  display: inline-block;
  padding-left: 8px;
`;

const FAQContainer = styled.div`
  margin-bottom: 3rem;
`;

const FAQTag = styled.p`
  font-size: 52px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const FAQCard = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  background: #064545;
  border-radius: 10px;
  margin: 0.5rem 0;
`;

const FAQQuestion = styled.p`
  text-align: left;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  padding: 2.2rem;
`;

const FAQToggle = styled(Image)`
  margin: 2rem;
  cursor: pointer;
`;

const FeedbackContainer = styled.div``;

const FeedbackHeading = styled.p`
  font-size: 52px;
  font-weight: bold;
  color: #fff;
  margin: 1rem 0;
`;

const FeedbackSubheading = styled.p`
  font-size: 20px;
  color: #fff;
`;

const FeedbackCard = styled.div`
  border: 1px solid #fff;
  height: 210px;
  width: 310px;
  border-radius: 10px;
  padding: 2rem 0 0;
`;

const FeedbackUser = styled.p`
  font-size: 20px;
  color: #fff;
  text-align: left;
  margin-top: 1rem;
  font-weight: bold;
`;

const FeedbackUserJob = styled.p`
  font-size: 15px;
  text-align: left;
  color: #fff;
  margin-top: 0.2rem;
`;

const UserFeeback = styled.p`
  font-size: 15px;
  color: #fff;
  text-align: left;
  margin: 0 1rem 0rem 1rem;
`;

const FooterBanner = styled.div`
  background: #064545;
  margin: 5rem 0;
  border-radius: 15px;
`;

// #0db2b2 for adding gradient in footer banner

const FooterTag = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  padding: 2rem 0 1rem;
`;

const FooterSubTag = styled.p`
  font-size: 18px;
  color: #fff;
  font-family: "Quicksand";
`;
