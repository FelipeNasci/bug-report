import { FeedbackTypeStep } from "./FeedbackTypeStep";
import { FeedbackContentStep } from "./FeedbackContentStep";
import { FeedbackSuccessStep } from "./FeedbackSuccessStep";
import { StepContextType } from "../../../contexts";

interface StepsHelperProps {
  step: StepContextType;
}

export const steps = {
  FeedbackTypeStep,
  FeedbackContentStep,
  FeedbackSuccessStep,
};

export const StepsHelper = ({ step, ...rest }: StepsHelperProps) =>
  steps[step]();
