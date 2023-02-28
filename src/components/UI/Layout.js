import { Header } from './Header';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';

export function Layout({ state, dispatch }) {
  return (
    <div>
      <Header state={state} dispatch={dispatch} />
      <Outlet />
      <Footer />
    </div>
  );
}
