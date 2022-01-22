import { ReactNode } from 'react';
import { useMatch, useResolvedPath } from 'react-router-dom';

import LogoSvg from '@assets/images/logo.svg';
import * as S from './styles';

type Props = {
  isHome?: boolean;
  icon?: ReactNode;
  to?: string;
};

export const ChannelButton = ({ isHome, icon: Icon, to = '#' }: Props) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <S.ButtonWrapper isHome={isHome} selected={!!match} to={to}>
      {isHome ? <img src={LogoSvg} alt="Pandoca" /> : Icon || <></>}
    </S.ButtonWrapper>
  );
};
