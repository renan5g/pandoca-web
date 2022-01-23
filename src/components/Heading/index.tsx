import { WithChildren, ColorsOptions } from '@shared/types';
import * as S from './styles';

export type Props = WithChildren<{
  textColor?: ColorsOptions;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}>;

export const Heading = ({ children, textColor, as = 'h1' }: Props) => (
  <S.HeadingContainer textColor={textColor} as={as}>
    {children}
  </S.HeadingContainer>
);
