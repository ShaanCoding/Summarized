import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  fetchAnkiDeck,
  fetchKeywords,
  fetchSummarizedNotes,
} from "../API/Requests";
import Buttons from "../Components/Buttons";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import InlineFlexbox from "../Components/InlineFlexbox";
import NavBar from "../Components/NavBar";
import Tag from "../Components/Tag";
import TitleProp from "../Components/TitleProp";

const SummarizedVideo: React.FC<{ match: any }> = (props) => {
  let videoURL =
    "http://easyhtml5video.com/assets/video/new/Penguins_of_Madagascar.mp4";

  console.log(props.match.params.id);

  const [keywords, setKeywords] = useState<string[]>([]);
  const [summarizedNotes, setSummarizedNotes] = useState<string[]>([]);
  const [ankiFlashCard, setAnkiFlashCard] = useState<string>();

  useEffect(() => {
    const getKeywords = async () => {
      const fetchKeywordsFromServer = await fetchKeywords();
      setKeywords(fetchKeywordsFromServer);
    };

    const getSummarizedNotes = async () => {
      const fetchSummarizedNotesFromServer = await fetchSummarizedNotes();
      setSummarizedNotes(fetchSummarizedNotesFromServer);
    };

    const getAnkiDeckNotes = async () => {
      const getAnkiDeckNotesFromServer = await fetchAnkiDeck();
      setAnkiFlashCard(getAnkiDeckNotesFromServer.ankiFlashCards);
    };

    getKeywords();
    getSummarizedNotes();
    getAnkiDeckNotes();
  }, []);

  return (
    <>
      <NavBar />

      <Content>
        <TitleProp
          title="SUMMARIZED LECTURE"
          description="View Our Summarized Lecture"
        />

        <div className="center-video">
          <video src={videoURL} autoPlay={false} controls={true} />
        </div>

        <div>
          <h2>Upload Video</h2>
          <div className="tag-grid">
            {keywords.map((keyword: string) => {
              return <Tag tagName={keyword} />;
            })}
          </div>
        </div>
        <div>
          <h2>Summarized Notes</h2>
          <div className="summarized-notes">
            {summarizedNotes.map((summarizedNote: string) => {
              return (
                <div>
                  <p>{summarizedNote}</p>
                </div>
              );
            })}
          </div>
        </div>

        <InlineFlexbox>
          <div className="button">
            {/* <Link to={ankiFlashCard} download="Anki" target="_blank"> */}
            <button type="button">Download Anki</button>
            {/* </Link> */}
          </div>
        </InlineFlexbox>
      </Content>

      <Footer />
    </>
  );
};

export default SummarizedVideo;
