import { Popover } from '@/shared/ui-components'
import { X } from '@/components/icons'

export const CloseButton = () => (
  <Popover.Button
    className='top-5 right-5 absolute text-zinc-400 hover:text-zinc-100'
    title='close feedback form'
  >
    <X className='w-4 h-4' weight='bold' />
  </Popover.Button>
)
