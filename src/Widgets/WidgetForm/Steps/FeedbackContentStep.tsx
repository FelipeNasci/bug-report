import { useState } from "react";
import { ScreenshotButton } from "../ScreenshotButton";

import { Header } from "./components/header";
import { useStepContext } from "../../../hooks";
import { FeedbackDataType } from "../../../contexts";
import type { FormEvent } from "../types";

export const FeedbackContentStep = () => {
  const [screenshot, setScreenshot] = useState<string>();
  const [message, setMessage] = useState<string>();

  const { feedback, setFeedback, next, back } = useStepContext();

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    setFeedback({ ...feedback, message } as FeedbackDataType);
    next();
  }

  return (
    <>
      <Header onBackClick={back}>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            className="w-6 h-6"
            src={feedback?.img?.source}
            alt={feedback?.img?.alt}
          />
          {feedback?.feedbackType}
        </span>
      </Header>

      <form className="w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="min-w-[304px] w-full text-sm placeholder:text-zinc-400 text-zinc-100 border-zinc-400 bg-transparent rounded-md focus:border-brand-500 focus:ring-1 focus:outline-none focus:ring-brand-500 scrollbar-thumb-slate-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="What is happen?"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />

        <footer className="flex gap-2 my-2 w-full">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
            type="submit"
            disabled={!message}
          >
            Submit feedback
          </button>
        </footer>
      </form>
    </>
  );
};
