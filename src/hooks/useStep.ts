import { useState } from 'react'
import { StepsType } from '@/contexts'

export const useStep = () => {
  const [step, setStep] = useState<StepsType>('FeedbackTypeStep')

  const steps: StepsType[] = [
    'FeedbackTypeStep',
    'FeedbackContentStep',
    'FeedbackSuccessStep',
  ]

  function next() {
    const actualStep = steps.indexOf(step)
    const nextStep = actualStep + 1
    actualStep < steps.length - 1 && setStep(steps[nextStep])
  }

  function back() {
    const actualStep = steps.indexOf(step)
    const previousStep = actualStep - 1
    actualStep > 0 && setStep(steps[previousStep])
  }

  function reset() {
    setStep(steps[0])
  }

  return { step, setStep, next, back, reset }
}
