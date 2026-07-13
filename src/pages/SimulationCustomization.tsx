import { MessageCircle, MousePointer2 } from 'lucide-react';
import { useState, type SyntheticEvent } from 'react';
import { useParams } from 'react-router-dom';
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
  const { sendMessage } = useChat(id ?? '');

  const handleSendMessage = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!question.trim()) return;

    console.log('Pergunta enviada:', question);

    await sendMessage(question);

    setQuestion('');
  };

  return (
    <main className="px-8 py-5">
      <h2 className="text-primary font-md text-md">✨ Insight financeiro personalizado</h2>
      <h1 className="text-foreground text-xl font-bold">Plano de Açao: {data?.goalName}</h1>
      <div>
        <div className="flex flex-col gap-3 ">
          <h2 className="text-foreground text-md font-semibold">💰 Diagnóstico Financeiro</h2>
          <p className="text-foreground ">{data?.insight?.diagnosis?.content}</p>
        </div>

        <div className="flex flex-col gap-3 ">
          <h2 className="text-foreground text-md font-semibold">📋 Sugestões Práticas</h2>
          <ol>
            {data?.insight?.suggestions?.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col gap-3 ">
          <h2 className="text-foreground text-md font-semibold">💡 Como Aumentar sua Renda</h2>
          <ol>
            {data?.insight?.extraIncome?.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>

        <Divider orientation="horizontal" />
        <div className=" outline-muted-foreground flex flex-col ">
          <h2 className="text-muted-foreground flex items-center gap-1 font-semibold">
            <MessageCircle />
            você
          </h2>
          <p className="text-muted-foreground font-semibold">
            Como eu posso ganhar uma renda extra para atingir minha meta? Atualmente trabalho como
            programador de aplicativos.
          </p>
          <Divider orientation="horizontal" />
        </div>
        <div className=" outline-muted-foreground flex flex-col ">
          <h2 className=" text-muted-foreground flex items-center gap-1 font-semibold">
            <MessageCircle />
            Resposta da IA
          </h2>
          <p className="text-foreground ">
            Para acelerar sua meta rumo ao Japão, você pode aproveitar sua experiência como
            desenvolvedor na Eduzz e em projetos de React.JS para realizar consultorias técnicas ou
            freelas de manutenção de apps. Como você domina tecnologias de alta demanda como Kafka,
            ClickHouse e RabbitMQ, oferecer mentorias de arquitetura de dados ou criar micro-SaaS
            focados em analytics são excelentes formas de gerar receita extra. Além disso, a venda
            de componentes prontos ou guias técnicos baseados no curso que você está desenvolvendo
            pode criar uma fonte de renda passiva constante. O foco em projetos de curto prazo
            garantirá o aporte necessário sem sobrecarregar sua rotina atual.
          </p>
          <Divider orientation="horizontal" />
        </div>
      </div>
      <div className="bg-card fixed bottom-0 left-0 right-0 w-full p-4">
        <div className="flex w-full items-center gap-2">
          <form onSubmit={handleSendMessage} className=" flex w-full items-center gap-2 ">
            <Input
              className="flex-1 border-none outline-none"
              placeholder="Digite sua mensagem..."
              value={question ?? ''}
              onChange={(e) => setQuestion(e.target.value)}
            />

            <Button variant="primary" className="p-2" type="submit">
              <MousePointer2 />
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
