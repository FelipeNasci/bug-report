import { useState } from "react";
import { FeedbackTypeStep } from "./FeedbackTypeStep";
import { FeedbackContentStep } from "./FeedbackContentStep";
import { FeedbackSuccessStep } from "./FeedbackSuccessStep";
import { StepsType } from "../../../contexts";
interface StepsHelperProps {
  step: StepsType;
}

export const StepsHelper = ({ step }: StepsHelperProps) => {
  switch (step) {
    case "FeedbackTypeStep":
      return <FeedbackTypeStep />;
    case "FeedbackContentStep":
      return <FeedbackContentStep />;
    case "FeedbackSuccessStep":
      return <FeedbackSuccessStep />;
  }
};
