import { ArrowLeft } from "@/components/icons";
import { CloseButton } from "@/components/buttons";

interface HeaderProps {
  onBackClick?: () => void;
  children?: React.ReactNode;
  hideBackButton?: boolean;
  hideCloseButton?: boolean;
}

export const Header = ({
  onBackClick,
  children,
  hideBackButton,
  hideCloseButton,
}: HeaderProps) => (
  <header className="mb-4">
    {!hideBackButton && (
      <button
        className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        type="button"
        onClick={onBackClick}
      >
        <ArrowLeft className="w-4 h-4" weight="bold" />
      </button>
    )}

    <span className="text-xl leading-6 flex items-center gap-2">
      {children}
    </span>

    {!hideCloseButton && <CloseButton />}
  </header>
);
