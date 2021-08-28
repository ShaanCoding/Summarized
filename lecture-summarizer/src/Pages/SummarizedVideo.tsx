import React from "react";
import Buttons from "../Components/Buttons";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import InlineFlexbox from "../Components/InlineFlexbox";
import NavBar from "../Components/NavBar";
import Tag from "../Components/Tag";
import TitleProp from "../Components/TitleProp";

const summarizedVideo: React.FC<{ match: any }> = (props) => {
  console.log(props.match.params.id);

  const handleSubmission = () => {};

  return (
    <>
      <NavBar />

      <Content>
        <TitleProp
          title="SUMMARIZED LECTURE"
          description="Our Lecture Summarizer Extracts Videos Into Meaningful and Important Portions Of Information and Summarizes Content For You"
        />

        <div>
          <h2>Upload Video</h2>
          <div className="tag-grid">
            <Tag tagName="Hello world" />
            <Tag tagName="Hello world" />
            <Tag tagName="Hello world" />
            <Tag tagName="Hello world" />
            <Tag tagName="Hello world" />
            <Tag tagName="Hello world" />
            <Tag tagName="Hello world" />
            <Tag tagName="Hello world" />
            <Tag tagName="Hello world" />
            <Tag tagName="Hello world" />
            <Tag tagName="Hello world" />
            <Tag tagName="Hello world" />
            <Tag tagName="Hello world" />
            <Tag tagName="Hello world" />
            <Tag tagName="Hello world" />
          </div>
        </div>

        <div>
          <h2>Summarized Notes</h2>
          <div className="summarized-notes">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi quam et illum asperiores, tenetur saepe cum officia
                corrupti aspernatur. Consequuntur aperiam eius impedit sapiente.
                Vero laudantium possimus excepturi laborum sit?
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi quam et illum asperiores, tenetur saepe cum officia
                corrupti aspernatur. Consequuntur aperiam eius impedit sapiente.
                Vero laudantium possimus excepturi laborum sit?
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi quam et illum asperiores, tenetur saepe cum officia
                corrupti aspernatur. Consequuntur aperiam eius impedit sapiente.
                Vero laudantium possimus excepturi laborum sit?
              </p>
            </div>
          </div>
        </div>

        <InlineFlexbox>
          <Buttons btnText="Download Anki" onClick={handleSubmission} />
        </InlineFlexbox>
      </Content>

      <Footer />
    </>
  );
};

export default summarizedVideo;
