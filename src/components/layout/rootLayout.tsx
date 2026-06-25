import { Outlet } from 'react-router-dom';
import { Header } from '../shared/header';
export function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
