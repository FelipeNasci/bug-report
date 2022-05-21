export const feedbackTypes = {
  BUG: {
    title: "Bug",
  },
  IDEA: {
    title: "Idea",
  },
  OTHER: {
    title: "Other",
  },
};

export type FeedbackDataType = {
  feedbackType: keyof typeof feedbackTypes;
  message?: string;
  img?: {
    source?: string;
    alt?: string;
  };
};

export type StepsType =
  | "FeedbackTypeStep"
  | "FeedbackContentStep"
  | "FeedbackSuccessStep";

export interface IStepContext {
  step: StepsType;
  next: () => void;
  back: () => void;
  reset: () => void;
  feedback?: FeedbackDataType;
  setFeedback: React.Dispatch<
    React.SetStateAction<FeedbackDataType | undefined>
  >;
}
