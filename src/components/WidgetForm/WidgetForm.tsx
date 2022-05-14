import { useState } from "react";

import {
  FeedbackTypeStep,
  FeedbackContentStep,
  FeedbackSuccessStep,
} from "./Steps";
import { FeedbackType } from "./types";

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSended, setFeedbackSended] = useState(false);

  function handleFeedbackReset() {
    setFeedbackType(null);
    setFeedbackSended(false);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-2 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSended ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleFeedbackReset} />
      ) : (
        <>
          {feedbackType ? (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackResetRequest={handleFeedbackReset}
              onSendFeedback={setFeedbackSended}
            />
          ) : (
            <FeedbackTypeStep setFeedbackType={setFeedbackType} />
          )}
        </>
      )}

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
  );
};
