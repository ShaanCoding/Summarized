import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IQuestionAnswer, ISummary } from "../API/Interfaces";
import {
  // fetchAnkiDeck,
  // fetchCurrentVideo,
  // fetchKeywords,
  // fetchQuestionsAndAnswer,
  // fetchSummarizedNotes,
  fetchSummaryData
} from "../API/Requests";
import Buttons from "../Components/Buttons";
import Content from "../Components/Content";
import Footer from "../Components/Footer";
import InlineFlexbox from "../Components/InlineFlexbox";
import NavBar from "../Components/NavBar";
import Tag from "../Components/Tag";
import TitleProp from "../Components/TitleProp";
import xd from "./summarizedVideo/snd_short.mp4";

const SummarizedVideo: React.FC<{ match: any }> = (props) => {
  // const [keywords, setKeywords] = useState<string[]>([]);
  // const [summarizedNotes, setSummarizedNotes] = useState<string[]>([]);
  // const [ankiFlashCard, setAnkiFlashCard] = useState<string>("");
  // const [currentVideo, setCurrentVideo] = useState<string>("");
  // const [questionsAndAnswers, setQuestionsAndAnswers] = useState<IQuestionAnswer[]>([]);
  const [summaryVideo, setSummaryVideo] = useState<ISummary>();

  useEffect(() => {

    const getLastItem = (thePath: String) => thePath.substring(thePath.lastIndexOf('/') + 1)

    let index = parseInt(getLastItem(window.location.href));

    console.log(index)

    const getSummaryData = async () => {
      const getSummaryFromServer = await fetchSummaryData(index);
      setSummaryVideo(getSummaryFromServer);
    };

    // const getKeywords = async () => {
    //   const fetchKeywordsFromServer = await fetchKeywords();
    //   setKeywords(fetchKeywordsFromServer);
    // };

    // const getSummarizedNotes = async () => {
    //   const fetchSummarizedNotesFromServer = await fetchSummarizedNotes();
    //   setSummarizedNotes(fetchSummarizedNotesFromServer);
    // };

    // const getAnkiDeckNotes = async () => {
    //   const getAnkiDeckNotesFromServer = await fetchAnkiDeck();
    //   setAnkiFlashCard(getAnkiDeckNotesFromServer.ankiFlashCards);
    // };

    // const getCurrentVideo = async () => {
    //   const getCurrentVideoFromServer = await fetchCurrentVideo();
    //   setCurrentVideo(getCurrentVideoFromServer.currentVideo);
    // };

    // const getQuestionsAndAnswers = async () => {
    //   const getQuestionsAndAnswersFromServer = await fetchQuestionsAndAnswer();
    //   setQuestionsAndAnswers(getQuestionsAndAnswersFromServer);
    // };

    // getKeywords();
    // getSummarizedNotes();
    // getAnkiDeckNotes();
    // getCurrentVideo();
    // getQuestionsAndAnswers();

    getSummaryData();
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
          <video src={xd} autoPlay={false} controls={true} />
        </div>

        <div>
          <h2>Upload Video</h2>
          <div className="tag-grid">
            {summaryVideo?.tags.map((keyword: string) => {
              return <Tag tagName={keyword} />;
            })}
          </div>
        </div>

        <div>
          <h2>Summarized Notes</h2>
          <div className="summarized-notes">
            {summaryVideo?.summaries.map((summarizedNote: string) => {
              return (
                <div>
                  <p>{summarizedNote}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2>Questions</h2>
          <div className="summarized-notes">
            {summaryVideo?.questions.map((question: string) => {
              return (
                <div>
                  <p>{question}</p>
                </div>
              );
            })}
          </div>
        </div>

        <InlineFlexbox>
          <Link to={{ pathname: "https://files.catbox.moe/jns8py.anki" }} target="_blank">
            <div className="button">
              <button>Download Anki</button>
            </div>
          </Link>
        </InlineFlexbox>
      </Content>

      <Footer />
    </>
  );
};

export default SummarizedVideo;
