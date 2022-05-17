import { StepContext } from "../../contexts";
import { useStep, useFeedback, useStepContext } from "../../hooks";
import { StepsHelper } from "./Steps";

export const WidgetForm = () => {
  const { step, next, back, reset } = useStep();
  const { feedback, setFeedback } = useFeedback();

  return (
    <StepContext.Provider
      value={{
        step,
        next,
        back,
        reset,
        feedback,
        setFeedback,
      }}
    >
      <div className="bg-zinc-900 p-4 relative rounded-2xl mb-2 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        <StepsHelper />
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
