import Success from "@/assets/success.svg";
import { Header } from "@/components/header";
import { useStepContext } from "@/hooks";

export const FeedbackSuccessStep = () => {
  const { reset } = useStepContext();

  return (
    <>
      <Header hideBackButton />

      <div className="flex flex-col items-center py-10 w-[394pxx]">
        <img src={Success} alt="success" />
        <span className="text-xl mt-2">Thank's for your feedback</span>

        <button
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50"
          onClick={reset}
        >
          I want send other feedback
        </button>
      </div>
    </>
  );
};
