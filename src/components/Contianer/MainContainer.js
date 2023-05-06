import * as React from "react";
import Container from "@mui/material/Container";

import { MainHeader } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function MainContainer({ children }) {
  return (
    <Container maxWidth="lg">
      <MainHeader />
      {children}
      <Footer />
    </Container>
  );
}
