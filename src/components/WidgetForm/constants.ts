import Bug from '../../assets/bug.svg'
import Idea from '../../assets/idea.svg'
import Thought from '../../assets/thought.svg'

export const feedbackTypes = {
  BUG: { title: 'Bug', img: { source: Bug, alt: 'bug image' } },
  IDEA: { title: 'Idea', img: { source: Idea, alt: 'light bulb image' } },
  OTHER: {
    title: 'Other',
    img: { source: Thought, alt: 'ballon of think image' },
  },
}
