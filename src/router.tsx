import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './components/layout/rootLayout';
import { SimulationFormPage } from './pages/SimulationFormPage';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <SimulationFormPage />,
      },
      {
        path: '/result',
        element: <h1>resultado</h1>,
      },
      {
        path: '/historico',
        element: <h1> historico de simulações</h1>,
      },
    ],
  },
]);
