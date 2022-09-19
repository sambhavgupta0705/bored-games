import React from "react";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function LandingPage() {
  return (
    <React.Fragment>
      <Navbar logo="BORED." />
      <Content />
      <Footer />
    </React.Fragment>
  );
}

export default LandingPage;
