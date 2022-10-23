import { Outlet } from 'react-router-dom';
import { Header, NavList, MainNav } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <NavList>
            <li>
              <MainNav to="/" end>
                Home
              </MainNav>
            </li>

            <li>
              <MainNav to="movies">Movies</MainNav>
            </li>
          </NavList>
        </nav>
      </Header>

      <main>
        <Outlet />
      </main>
    </>
  );
};
