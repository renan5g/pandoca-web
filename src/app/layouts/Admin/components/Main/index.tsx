import { WithChildren } from '@helpers/types';

import * as S from './styles';

type Props = WithChildren;

export const MainWrapper = ({ children }: Props) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};
