import { Search } from './Search';
import { UserInfo } from './UserInfo';

import * as S from './styles';

export const Header = () => {
  return (
    <S.Container>
      <Search />
      <UserInfo />
    </S.Container>
  );
};
