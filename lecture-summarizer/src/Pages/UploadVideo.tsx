import React, { useState } from "react";
import Buttons from "../Components/Buttons";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import InlineFlexbox from "../Components/InlineFlexbox";
import NavBar from "../Components/NavBar";
import TitleProp from "../Components/TitleProp";

const UploadVideo = () => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [isFilePicked, setIsFiledPicked] = useState(false);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;

    if (!fileList) return;

    setSelectedFile(fileList[0]);
  };

  const handleSubmission = () => {
    setIsFiledPicked(true);
  };

  return (
    <>
      <NavBar />

      <Content>
        <TitleProp
          title="UPLOAD VIDEO"
          description="Our Lecture Summarizer Extracts Videos Into Meaningful and Important Portions Of Information and Summarizes Content For You"
        />

        <div className="upload-file">
          <input type="file" name="file" onChange={changeHandler} />
        </div>

        <div>
          {isFilePicked ? (
            <>
              <p>Filename: {selectedFile?.name}</p>
              <p>Filetype: {selectedFile?.type}</p>
              <p>Size in bytes: {selectedFile?.size}</p>
            </>
          ) : (
            ""
          )}
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
