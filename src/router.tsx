import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from './components/layout/rootLayout';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <h1>heloo povos</h1>,
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
