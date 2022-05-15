import { createContext } from "react";

export type StepContextType =
  | "FeedbackTypeStep"
  | "FeedbackContentStep"
  | "FeedbackSuccessStep";

export const StepContext = createContext({} as StepContextType);
