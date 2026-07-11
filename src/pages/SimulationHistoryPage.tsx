import { Goal } from 'lucide-react';
import { CardHistory } from '../components/features/simulationHistory/CardHistory';
import { PageHero } from '../components/shared/pageHero';
import { useSimulationStorage } from '../hooks/useSimulationStorage';

export function SimulationHistoryPage() {
  const { getAllFormData } = useSimulationStorage();

  const histories = getAllFormData();

  console.log(histories);

  return (
    <main className="mx-auto max-w-6xl  sm:py-14">
      <PageHero
        title="Histórico de simulações"
        subtitle="Acompanhe o histórico de seus planos financeiros."
      />

      <div>
        {histories.map((history) => {
          console.log(history);

          return (
            <CardHistory
              key={history.id}
              icon={<Goal />}
              title={history.goalName}
              date={history.insight?.createdAt || 'Data não disponível'}
              goalAmount={history.goalAmount}
              goalDeadline={`${history.goalDeadline} meses`}
              subtitle={history.income}
            />
          );
        })}
      </div>
    </main>
  );
}
