import { FeedbackTypeStep } from "./FeedbackTypeStep";
import { FeedbackContentStep } from "./FeedbackContentStep";
import { FeedbackSuccessStep } from "./FeedbackSuccessStep";
import { StepsType } from "../../../contexts";
import { StepContext } from "../../../contexts";
import { useStepContext } from "../../../hooks";
interface StepsHelperProps {
  step: StepsType;
}

export const steps = {
  FeedbackTypeStep,
  FeedbackContentStep,
  FeedbackSuccessStep,
};

export const StepsHelper = () => {
  const { step } = useStepContext();
  return <>{steps[step]()}</>;
};
