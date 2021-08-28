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
          title="MAIN PAGE"
          description="Upload Your Lecture To Automatically Summarize Or View Past Lectures"
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
