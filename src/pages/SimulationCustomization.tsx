import { MessageCircle, MousePointer2 } from 'lucide-react';
import { useState, type SyntheticEvent } from 'react';
import { useParams } from 'react-router-dom';
import { SimulationChatError } from '../components/features/simulationChat/error';
import { Button } from '../components/shared/button';
import { Divider } from '../components/shared/divider';
import { Input } from '../components/shared/input';
import { useChat } from '../hooks/useChat';
import { useSimulationStorage } from '../hooks/useSimulationStorage';

export function SimulationCustomization() {
  const { id } = useParams<{ id: string }>();
  const { getFormData } = useSimulationStorage();
  const [question, setQuestion] = useState('');
  const data = id ? getFormData(id) : null;
  const { error, isLoading, sendMessage, messages } = useChat(id ?? '');

  const handleSendMessage = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!question.trim()) return;
    setQuestion('');
    await sendMessage(question);
  };

  return (
    <main className="px-8 py-5">
      <h2 className="text-primary font-md text-md">✨ Insight financeiro personalizado</h2>
      <h1 className="text-foreground text-2xl font-bold">Plano de Ação: {data?.goalName}</h1>
      <div className="mb-15 h-full overflow-y-auto">
        <div className="mt-5 flex flex-col">
          <h2 className="text-foreground text-md font-semibold">💰 Diagnóstico Financeiro</h2>
          <p className="text-foreground ">{data?.insight?.diagnosis?.content}</p>
        </div>

        <div className="mt-5 flex flex-col">
          <h2 className="text-foreground text-md font-semibold">📋 Sugestões Práticas</h2>
          <ol>
            {data?.insight?.suggestions?.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>

        <div className="mt-5 flex flex-col ">
          <h2 className="text-foreground text-md font-semibold">💡 Como Aumentar sua Renda</h2>
          <ol>
            {data?.insight?.extraIncome?.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>

        <Divider orientation="horizontal" />
        {messages.map((message, index) =>
          message.role === 'user' ? (
            <div key={index} className="outline-muted-foreground flex flex-col">
              <h2 className="text-muted-foreground flex items-center gap-1 font-semibold">
                <MessageCircle />
                Você
              </h2>

              <p className="text-muted-foreground font-semibold">{message.content}</p>

              <Divider orientation="horizontal" />
            </div>
          ) : (
            <div key={index} className="outline-muted-foreground flex flex-col">
              <h2 className="text-muted-foreground mb-2 flex items-center gap-1 font-semibold">
                <MessageCircle />
                Resposta da IA
              </h2>

              <p className="text-foreground">{message.content}</p>

              <Divider orientation="horizontal" />
            </div>
          ),
        )}

        {isLoading && (
          <div className="outline-muted-foreground flex flex-col">
            <h2 className="text-muted-foreground flex items-center gap-1 font-semibold">
              <MessageCircle />
              Resposta da IA
            </h2>

            <div className="flex gap-1 py-2">
              <span className="bg-muted-foreground h-2 w-2 animate-bounce rounded-full"></span>
              <span
                className="bg-muted-foreground h-2 w-2 animate-bounce rounded-full"
                style={{ animationDelay: '150ms' }}
              ></span>
              <span
                className="bg-muted-foreground h-2 w-2 animate-bounce rounded-full"
                style={{ animationDelay: '300ms' }}
              ></span>
            </div>

            <Divider orientation="horizontal" />
          </div>
        )}

        {error && (
          <div className="outline-muted-foreground flex flex-col">
            <SimulationChatError message={error} onRetry={() => sendMessage(question)} />
          </div>
        )}
      </div>
      <div className="bg-card fixed inset-x-0 bottom-0 p-4">
        <form className="flex w-full gap-2" onSubmit={handleSendMessage}>
          <Input
            className="w-full flex-1"
            placeholder="Digite sua mensagem..."
            value={question ?? ''}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <Button variant="primary" className="shrink-0 p-4" type="submit">
            <MousePointer2 className="rotate-90" />
          </Button>
        </form>
      </div>
    </main>
  );
}
