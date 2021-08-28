import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { IVideo } from "../API/Interfaces";
import { fetchVideoList } from "../API/Requests";
import Buttons from "../Components/Buttons";
import Content from "../Components/Content";
import BasicTable from "../Components/BasicTable";
import Footer from "../Components/Footer";
import InlineFlexbox from "../Components/InlineFlexbox";
import NavBar from "../Components/NavBar";
import TitleProp from "../Components/TitleProp";

const ViewVideo = () => {
  return (
    <>
      <NavBar />

      <Content>
        <TitleProp
          title="VIEW VIDEO"
          description="View Past Lectures and Summarized Notes"
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

export default ViewVideo;
