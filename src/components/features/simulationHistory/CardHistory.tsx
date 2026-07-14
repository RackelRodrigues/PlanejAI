import { ExternalLink, MessageCircle, TrashIcon } from 'lucide-react';
import { Button } from '../../shared/button';
import { Divider } from '../../shared/divider';

interface CardHistoryProps {
  icon: React.ReactNode;
  title: string;
  date: string;
  goalAmount: string;
  goalDeadline: string;
  subtitle: string;
  onDelete?: () => void;
  onDetails?: () => void;
  onChat?: () => void;
}

export function CardHistory({
  icon,
  title,
  date,
  goalAmount,
  goalDeadline,
  subtitle,
  onDelete,
  onDetails,
  onChat,
}: CardHistoryProps) {
  return (
    <div className="bg-card mb-5 flex w-full items-center  gap-4 rounded-2xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] ">
      <span className="bg-muted hidden h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-purple-400 text-white sm:flex">
        {icon}
      </span>

      <div className="flex flex-1 flex-col gap-4 sm:w-full md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2 max-[300px]:hidden">
          <span className="bg-muted flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-purple-400 text-white sm:hidden">
            {icon}
          </span>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-muted-foreground">{date}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className=" text-muted-foreground text-sm font-semibold">CUSTO DA META</h2>
          <p className="text-lg  font-semibold">{goalAmount}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-muted-foreground text-sm font-semibold">PRAZO</h2>
          <p className="text-lg font-semibold">{goalDeadline}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className=" text-muted-foreground text-sm font-semibold">ECONOMIA MENSAL</h2>
          <p className="text-lg font-semibold">{subtitle}</p>
        </div>

        <div className="flex items-center gap-2 sm:justify-center">
          <Divider orientation="vertical" className="h-full sm:hidden" />
          <Button
            variant="ghost"
            icon={TrashIcon}
            className="text-red-500 sm:flex-1"
            onClick={onDelete}
          />

          <Button variant="secondary" className="sm:flex-1" icon={ExternalLink} onClick={onDetails}>
            ver detalhes
          </Button>

          <Button variant="tertiary" className="sm:flex-1" icon={MessageCircle} onClick={onChat}>
            Abrir chat
          </Button>
        </div>
      </div>
    </div>
  );
}
