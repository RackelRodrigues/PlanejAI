import { ExternalLink, TrashIcon } from 'lucide-react';
import { Button } from '../../shared/button';
import { Divider } from '../../shared/divider';

interface CardHistoryProps {
  icon: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export function CardHistory({ icon, title, subtitle }: CardHistoryProps) {
  return (
    <div className="bg-card m-5 flex w-full items-center  gap-4 rounded-2xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)]">
      <span className="bg-muted flex h-10 w-10 items-center justify-center rounded-sm bg-purple-400 text-white">
        {icon}
      </span>
      <div className="flex flex-1 items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-muted-foreground font-semibold">{title}</h2>
          <p className="text-lg  font-semibold">{subtitle}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-muted-foreground font-semibold">{title}</h2>
          <p className="text-lg font-semibold">{subtitle}</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-muted-foreground font-semibold">{title}</h2>
          <p className="text-lg font-semibold">{subtitle}</p>
        </div>

        <div className="flex items-center gap-2">
          <Divider orientation="vertical" />
          <Button variant="ghost" icon={TrashIcon} className=" text-red-500" />

          <Button variant="secondary" icon={ExternalLink}>
            ver detalhes
          </Button>
        </div>
      </div>
    </div>
  );
}
