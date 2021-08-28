import React from "react";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import TitleProp from "../Components/TitleProp";

const appMain = () => {
  return (
    <>
      <NavBar />

      <Content>
        <TitleProp
          title="UPLOAD VIDEO"
          description="Our Lecture Summarizer Extracts Videos Into Meaningful and Important Portions Of Information and Summarizes Content For You"
        />
      </Content>

      <Footer />
    </>
  );
};

export default appMain;
