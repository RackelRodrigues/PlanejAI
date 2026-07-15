import { Goal } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardHistory } from '../components/features/simulationHistory/CardHistory';
import { Button } from '../components/shared/button';
import { Modal } from '../components/shared/modal';
import { PageHero } from '../components/shared/pageHero';
import { useSimulationStorage } from '../hooks/useSimulationStorage';

export function SimulationHistoryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const navigate = useNavigate();

  const { getAllFormData, deleteFormData } = useSimulationStorage();

  const histories = getAllFormData();

  const handleDelete = (id: string) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };
  const handleDetails = (id: string) => {
    navigate(`/resultado/${id}`);
  };

  const handleChat = (id: string) => {
    navigate(`/chat/${id}`);
  };

  return (
    <main className="mx-auto max-w-6xl  sm:py-14">
      <PageHero
        title="Histórico de simulações"
        subtitle="Acompanhe o histórico de seus planos financeiros."
      />

      <div className="p-2 sm:p-0">
        {histories.map((history) => {
          return (
            <CardHistory
              key={history.id}
              icon={<Goal />}
              title={history.goalName}
              date={history.insight?.createdAt || 'Data não disponível'}
              goalAmount={history.goalAmount}
              goalDeadline={`${history.goalDeadline} meses`}
              subtitle={history.income}
              onDelete={() => {
                handleDelete(history.id);
              }}
              onDetails={() => {
                handleDetails(history.id);
              }}
              onChat={() => handleChat(history.id)}
            />
          );
        })}
      </div>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          question="  Voce tem certeza que deseja excluir esta simulação?"
        >
          <div className="flex w-full flex-1 gap-2">
            <Button
              className="w-full"
              variant="primary"
              onClick={() => {
                if (selectedId) {
                  deleteFormData(selectedId);
                }
                setIsModalOpen(false);
              }}
            >
              Excluir
            </Button>
            <Button
              className="border-b-background w-full"
              variant="ghost"
              onClick={() => setIsModalOpen(false)}
            >
              Cancelar
            </Button>
          </div>
        </Modal>
      )}
    </main>
  );
}
