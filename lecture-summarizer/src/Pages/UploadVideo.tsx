import React, { useState } from "react";
import { uploadVideo } from "../API/Requests";
import Buttons from "../Components/Buttons";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import InlineFlexbox from "../Components/InlineFlexbox";
import NavBar from "../Components/NavBar";
import TitleProp from "../Components/TitleProp";

const UploadVideo = () => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [isFilePicked, setIsFiledPicked] = useState(false);

  const fileInput = React.createRef<HTMLInputElement>();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;

    if (!fileList) return;

    setSelectedFile(fileList[0]);
  };

  const handleSubmission = () => {
    setIsFiledPicked(true);
    uploadVideo(selectedFile);
  };

  return (
    <>
      <NavBar />

      <Content>
        <TitleProp
          title="UPLOAD VIDEO"
          description="Select Your Video To Automatically Summarize"
        />

        <div className="upload-file">
          <div>
            <input type="file" name="file" onChange={changeHandler} />
          </div>
        </div>

        <InlineFlexbox>
          <Buttons btnText="Submit Video" onClick={handleSubmission} />
        </InlineFlexbox>
      </Content>

      <Footer />
    </>
  );
};

export default UploadVideo;
