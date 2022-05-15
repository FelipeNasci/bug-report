import { feedbackTypes } from "../constants";
import { CloseButton } from "../../../components/buttons";

import type { FeedbackType } from "../types";
interface FeedbackTypeStepProps {
  setFeedbackType?: (feedbackType: FeedbackType) => void;
}

// {}: // setFeedbackType,
// FeedbackTypeStepProps
export const FeedbackTypeStep = () => (
  <>
    <header>
      <span className="text-xl leading-10">Insert your feedback</span>
      <CloseButton />
    </header>

    <div className="flex py-0 my-2 gap-2 w-full">
      {Object.entries(feedbackTypes).map(([key, value]) => (
        <button
          className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          key={key}
          onClick={() => {
            // setFeedbackType(key as FeedbackType)
          }}
        >
          <img src={value.img.source} alt={value.img.alt} />
          <span>{value.title}</span>
        </button>
      ))}
    </div>
  </>
);
