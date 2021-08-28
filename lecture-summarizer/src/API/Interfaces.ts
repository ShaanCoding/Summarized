export interface IVideo {
  id: number;
  name: string;
}

export interface IQuestionAnswer {
  id: number;
  question: string;
  answer: string;
}

export interface ISummary {
  name: string;
  blob: string;
  tags: string[];
  questions: string[];
  summaries: string[];
}

export interface IQuestion {
  generated_text: string;
}