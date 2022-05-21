import { useContext } from "react";
import { IStepContext, StepContext } from "../contexts";

export const useStepContext = (): IStepContext => useContext(StepContext);
