import { useState } from 'react'
import { FeedbackDataType } from '@/contexts'

export const useFeedback = () => {
  const [feedback, setFeedback] = useState<FeedbackDataType>()
  return { feedback, setFeedback }
}
