import { Goal } from 'lucide-react';
import { CardHistory } from '../components/features/simulationHistory/CardHistory';
import { PageHero } from '../components/shared/pageHero';

const histories = [
  {
    id: 1,
    icon: <Goal />,
    title: 'Viagem para o Japão',
    subtitle: '23/05/2026',
  },
  {
    id: 2,
    icon: <Goal />,
    title: 'Viagem para a França',
    subtitle: '15/08/2026',
  },
  {
    id: 3,
    icon: <Goal />,
    title: 'Comprar um carro',
    subtitle: '10/01/2027',
  },
];

export function SimulationHistoryPage() {
  return (
    <main className="mx-auto max-w-6xl  sm:py-14">
      <PageHero
        title="Histórico de simulações"
        subtitle="Acompanhe o histórico de seus planos financeiros."
      />

      <div>
        {histories.map((history) => (
          <CardHistory
            key={history.id}
            icon={history.icon}
            title={history.title}
            subtitle={history.subtitle}
          />
        ))}
      </div>
    </main>
  );
}
