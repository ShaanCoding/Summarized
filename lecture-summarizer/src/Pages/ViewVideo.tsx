import { Button } from "@material-ui/core";
import React from "react";
import Buttons from "../Components/Buttons";
import Content from "../Components/Content";
import BasicTable from "../Components/EnhancedTableHead";
import Footer from "../Components/Footer";
import InlineFlexbox from "../Components/InlineFlexbox";
import NavBar from "../Components/NavBar";
import TitleProp from "../Components/TitleProp";

const viewVideo = () => {
  return (
    <>
      <NavBar />

      <Content>
        <TitleProp
          title="VIEW VIDEO"
          description="Our Lecture Summarizer Extracts Videos Into Meaningful and Important Portions Of Information and Summarizes Content For You"
        />

        <InlineFlexbox>
          <BasicTable />
        </InlineFlexbox>

        <InlineFlexbox>
          <Buttons btnText="Upload Another Video" btnURL="/uploadVideo" />
        </InlineFlexbox>
      </Content>

      <Footer />
    </>
  );
};

export default viewVideo;
