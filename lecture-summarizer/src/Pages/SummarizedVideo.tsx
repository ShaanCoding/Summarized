import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IQuestionAnswer } from "../API/Interfaces";
import {
  fetchAnkiDeck,
  fetchCurrentVideo,
  fetchKeywords,
  fetchQuestionsAndAnswer,
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
  const [keywords, setKeywords] = useState<string[]>([]);
  const [summarizedNotes, setSummarizedNotes] = useState<string[]>([]);
  const [ankiFlashCard, setAnkiFlashCard] = useState<string>("");
  const [currentVideo, setCurrentVideo] = useState<string>("");
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState<
    IQuestionAnswer[]
  >([]);

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

    const getCurrentVideo = async () => {
      const getCurrentVideoFromServer = await fetchCurrentVideo();
      setCurrentVideo(getCurrentVideoFromServer.currentVideo);
    };

    const getQuestionsAndAnswers = async () => {
      const getQuestionsAndAnswersFromServer = await fetchQuestionsAndAnswer();
      setQuestionsAndAnswers(getQuestionsAndAnswersFromServer);
    };

    getKeywords();
    getSummarizedNotes();
    getAnkiDeckNotes();
    getCurrentVideo();
    getQuestionsAndAnswers();
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
          <video src={currentVideo} autoPlay={false} controls={true} />
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

        <div>
          <h2>Questions + Answers</h2>
          <div className="summarized-notes">
            {questionsAndAnswers.map((question: IQuestionAnswer) => {
              return (
                <div>
                  <p>{question.question}</p>
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
