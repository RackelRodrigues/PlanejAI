import { AlertCircle, RefreshCw } from 'lucide-react';

import { Button } from '../../shared/button';

interface SimulationChatErrorProps {
  message: string;
  onRetry: () => void;
}

export function SimulationChatError({ message, onRetry }: SimulationChatErrorProps) {
  if (!message) return null;

  return (
    <div className="flex flex-1 items-center justify-center px-6 py-12">
      <div className="bg-card border-border flex max-w-md flex-col items-center gap-4 rounded-2xl border p-6 text-center shadow-sm">
        <div className="bg-destructive/10 flex h-14 w-14 items-center justify-center rounded-full">
          <AlertCircle className="text-destructive h-7 w-7" />
        </div>

        <div className="space-y-1">
          <h2 className="text-foreground text-lg font-semibold">
            Não foi possível obter a resposta
          </h2>

          <p className="text-muted-foreground text-sm">{message}</p>
        </div>

        <Button variant="primary" icon={RefreshCw} onClick={onRetry} className="mt-2">
          Tentar novamente
        </Button>
      </div>
    </div>
  );
}
