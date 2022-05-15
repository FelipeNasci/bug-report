import { useState } from "react";

import {
  FeedbackTypeStep,
  FeedbackContentStep,
  FeedbackSuccessStep,
} from "./Steps";

import { FeedbackType } from "./types";
import { StepContextType, StepContext } from "../../contexts";
import { StepsHelper } from "./Steps";

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSended, setFeedbackSended] = useState(false);
  const [step, setStep] = useState<StepContextType>("FeedbackContentStep");

  function handleFeedbackReset() {
    setFeedbackType(null);
    setFeedbackSended(false);
  }

  return (
    <StepContext.Provider value={step}>
      <div className="bg-zinc-900 p-4 relative rounded-2xl mb-2 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        <StepsHelper step={step} />

        <footer className="text-xs text-neutral-400">
          Done with ♥ by{" "}
          <a
            className="underline underline-offset-2"
            href="https://www.github.com/felipenasci"
          >
            felipenasci
          </a>
        </footer>
      </div>
    </StepContext.Provider>
  );
};
