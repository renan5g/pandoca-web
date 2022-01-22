import { Outlet } from 'react-router-dom';
import { Header, MainWrapper, Sidebar } from './components';
import * as S from './styles';

export const AdminLayout = () => {
  return (
    <S.Wrapper>
      <Sidebar />
      <Header />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
    </S.Wrapper>
  );
};
