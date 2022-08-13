export type FeedbackType = 'BUG' | 'IDEA' | 'OTHER'

export type FeedbackDataType = {
  feedbackType: FeedbackType
  message?: string
  img?: {
    source?: string
    alt?: string
  }
}

export type StepsType =
  | 'FeedbackTypeStep'
  | 'FeedbackContentStep'
  | 'FeedbackSuccessStep'

export interface IStepContext {
  step: StepsType
  next: () => void
  back: () => void
  reset: () => void
  feedback?: FeedbackDataType
  setFeedback: React.Dispatch<
    React.SetStateAction<FeedbackDataType | undefined>
  >
}
