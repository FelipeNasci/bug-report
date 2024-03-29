import { ChatTeardropDots } from '@/components/icons'
import { Popover } from '@/shared/ui-components'
import { WidgetForm } from './WidgetForm'

type WidgetsProps = {
  children?: React.ReactNode
}

export const Widgets = ({ children }: WidgetsProps) => (
  <>
    {children}
    <div>
      <Popover className='absolute bottom-4 right-5 md:bottom-8 md:right-8 flex flex-col items-end'>
        <Popover.Panel>
          <WidgetForm />
        </Popover.Panel>
        <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
          <ChatTeardropDots className='w-6 h6' />
          <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-200 ease-linear'>
            <span className='pl-2' />
            Feedback
          </span>
        </Popover.Button>
      </Popover>
    </div>
  </>
)
