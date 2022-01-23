import { WithChildren, ColorsOptions } from '@shared/types';
import * as S from './styles';

export type Props = WithChildren<{
  textColor?: ColorsOptions;
  fontSize?: number;
  bold?: boolean;
}>;

export const Text = ({ children, textColor, fontSize, bold }: Props) => (
  <S.TextContainer textColor={textColor} fontSize={fontSize} bold={bold}>
    {children}
  </S.TextContainer>
);
