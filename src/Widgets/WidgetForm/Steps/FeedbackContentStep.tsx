import { useState } from "react";
import { ArrowLeft } from "../../../components/icons";
import { feedbackTypes } from "../constants";
import { CloseButton } from "../../../components/buttons";
import { ScreenshotButton } from "../ScreenshotButton";

import type { FeedbackType, FormEvent } from "../types";
interface FeedbackTypeStepProps {
  feedbackType: FeedbackType;
  onFeedbackResetRequest: () => void;
  onSendFeedback: (hasSended: boolean) => void;
}

export const FeedbackContentStep = ({
  feedbackType,
  onFeedbackResetRequest,
  onSendFeedback,
}: FeedbackTypeStepProps) => {
  const { title, img } = feedbackTypes[feedbackType];

  const [screenshot, setScreenshot] = useState<string | undefined>(undefined);
  const [feedback, setFeedback] = useState<string>();

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    onSendFeedback(true);
  }

  return (
    <>
      <header className="mb-4">
        <button
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          type="button"
          onClick={onFeedbackResetRequest}
        >
          <ArrowLeft className="w-4 h-4" weight="bold" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img className="w-6 h-6" src={img.source} alt={img.alt} />
          {title}
        </span>

        <CloseButton />
      </header>

      <form className="w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="min-w-[304px] w-full text-sm placeholder:text-zinc-400 text-zinc-100 border-zinc-400 bg-transparent rounded-md focus:border-brand-500 focus:ring-1 focus:outline-none focus:ring-brand-500 scrollbar-thumb-slate-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="What is happen?"
          value={feedback}
          onChange={(event) => setFeedback(event.target.value)}
        />

        <footer className="flex gap-2 my-2 w-full">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
            type="submit"
            disabled={!feedback}
          >
            Submit feedback
          </button>
        </footer>
      </form>
    </>
  );
};
