import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './components/layout/rootLayout';
import { SimulationCustomization } from './pages/SimulationCustomization';
import { SimulationFormPage } from './pages/SimulationFormPage';
import { SimulationHistoryPage } from './pages/SimulationHistoryPage';
import { SimulationResultPage } from './pages/SimulationResultPage';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <SimulationFormPage />,
      },
      {
        path: '/resultado/:id',
        element: <SimulationResultPage />,
      },
      {
        path: '/historico',
        element: <SimulationHistoryPage />,
      },
      {
        path: '/chat/:id',
        element: <SimulationCustomization />,
      },
    ],
  },
]);
