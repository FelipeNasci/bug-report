import { useState } from "react";
import { CloseButton } from "../CloseButton";

import { FeedbackTypeStep } from "./Steps";
import { FeedbackType } from "./types";

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-2 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-10">Deixe seu feedback</span>
        <CloseButton />
      </header>
      {feedbackType ? (
        <span>{feedbackType}</span>
      ) : (
        <FeedbackTypeStep setFeedbackType={setFeedbackType} />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por{" "}
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
