import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";

export const Widgets = () => (
  <Popover className="absolute bottom-4 right-5">
    <Popover.Panel>
      <p>Hello World</p>
    </Popover.Panel>
    <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
      <ChatTeardropDots className="w-6 h6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-200 ease-linear">
        <span className="pl-2" />
        Feedback
      </span>
    </Popover.Button>
  </Popover>
);