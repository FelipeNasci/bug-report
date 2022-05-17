import { feedbackTypes } from "../constants";
import { Header } from "./components";

import { useStepContext } from "../../../hooks";
import { FeedbackDataType } from "../../../contexts";

export const FeedbackTypeStep = () => {
  const { setFeedback, next } = useStepContext();

  return (
    <>
      <Header hideBackButton>Insert your feedback</Header>

      <div className="flex py-0 my-2 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            key={key}
            onClick={() => {
              const newFeedback = { feedbackType: key, img: value.img };
              setFeedback(newFeedback as FeedbackDataType);
              next();
            }}
          >
            <img src={value.img.source} alt={value.img.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
};
