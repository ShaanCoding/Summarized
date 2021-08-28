import axios from "axios";

// Get Keywords
let SERVER_URL = "http://localhost:5000";

export const fetchKeywords = async () => {
  const res = await axios.get(`${SERVER_URL}/keywords`);
  return res.data;
};

// Get Video List
export const fetchVideoList = async () => {
  const res = await axios.get(`${SERVER_URL}/videoList`);
  return res.data;
};

// Get Summarized Notes
export const fetchSummarizedNotes = async () => {
  const res = await axios.get(`${SERVER_URL}/summarizedNotes`);
  return res.data;
};

// Get Anki Deck
export const fetchAnkiDeck = async () => {
  const res = await axios.get(`${SERVER_URL}/ankiFlashCards`);
  return res.data;
};

// Get Anki Deck
export const fetchCurrentVideo = async () => {
  const res = await axios.get(`${SERVER_URL}/currentVideo`);
  return res.data;
};

// Get Questions + Answers
export const fetchQuestionsAndAnswer = async () => {
  const res = await axios.get(`${SERVER_URL}/questions`);
  return res.data;
};

// Upload Video
// If it doesn't work blames James W
export const uploadVideo = async (data?: File) => {
  if (!data) return;

  const formData = new FormData();
  formData.append(data.name, data);
  const res = await axios.post(`${SERVER_URL}/upload`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  console.log(res.data);
  return res.data;
};
