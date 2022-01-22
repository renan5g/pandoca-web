import { Search as SearchIcon } from 'styled-icons/boxicons-solid';

import * as S from './styles';

export const Search = () => {
  return (
    <S.Container>
      <SearchIcon width={28} />
      <S.SearchInput placeholder="Pesquise por uma obra" type="search" />
    </S.Container>
  );
};
