import React from "react";
import Buttons from "../Components/Buttons";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import InlineFlexbox from "../Components/InlineFlexbox";
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

        <InlineFlexbox>
          <Buttons btnURL="/uploadVideo" btnText="Upload Lectures" />
          <Buttons btnURL="/viewVideo" btnText="View My Lectures" />
        </InlineFlexbox>
      </Content>

      <Footer />
    </>
  );
};

export default appMain;
