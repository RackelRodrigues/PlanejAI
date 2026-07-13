interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  question?: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, question, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5 backdrop-blur-lg"
      onClick={onClose}
    >
      <div className="bg-background  h-50 w-150 flex flex-col items-center justify-center rounded-lg px-5">
        <h2 className="text-foreground text-lg font-semibold">{question}</h2>
        <div className="mt-4 flex w-full gap-3 ">{children}</div>
      </div>
    </div>
  );
}
