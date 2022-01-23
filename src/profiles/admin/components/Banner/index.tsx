import { Heading } from '@components/Heading';
import { Text } from '@components/Text';

import * as S from './styles';

type Props = {
  onClickButton?: () => void;
};

export const Banner = ({ onClickButton }: Props) => {
  return (
    <S.Container>
      <S.TextsWrapper>
        <Text textColor="TEXT_WHITE">Padaria Scans</Text>
        <Heading textColor="TEXT_WHITE" as="h2">
          Pandoca Dashboard
        </Heading>
      </S.TextsWrapper>

      <S.ButtonWrapper bgColor="SHAPES" onClick={onClickButton}>
        <Text textColor="TEXT_HEADING">Adicionar Capitulo</Text>
        <S.AddIcon />
      </S.ButtonWrapper>
    </S.Container>
  );
};
