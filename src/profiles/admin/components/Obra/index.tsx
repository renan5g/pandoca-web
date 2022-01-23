import type { IObra } from '@shared/data/obras';
import { Play } from 'styled-icons/fluentui-system-filled';
import * as S from './styles';

type Props = {
  data: IObra;
};

export const Obra = ({ data: { chapters, cover, title } }: Props) => {
  return (
    <S.Container>
      <S.CoverWrapper>
        <Play width={24} />
        <img src={cover} alt={title} />
      </S.CoverWrapper>

      <S.TextsWrapper>
        <h2>{title}</h2>
        <span>{chapters} Capitulos</span>
      </S.TextsWrapper>
    </S.Container>
  );
};
