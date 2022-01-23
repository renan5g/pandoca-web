import type { IObra } from '@shared/data';
import { Tag } from '@components/Tag';
import { Heading } from '@components/Heading';
import { Text } from '@components/Text';
import { Heart, Clock, Play } from 'styled-icons/fluentui-system-filled';

import { Scan } from '../Scan';

import * as S from './styles';

export type Props = {
  data: IObra;
  onSelect: () => void;
};

export const Chapter = ({ data, onSelect }: Props) => {
  return (
    <S.Container onClick={onSelect}>
      <S.CoverWrapper className="__cover-small">
        <Play width={24} />
        <S.Cover src={data.cover} />
      </S.CoverWrapper>

      <S.TextWrapper className="__texts-small">
        <S.Texts>
          <Heading as="h3">{data.title}</Heading>

          <Text>
            Chapther {data.lastChapter?.number}: {data.lastChapter?.name}
          </Text>
        </S.Texts>

        {data.scan && <Scan source={data.scan.cover} name={data.scan.name} />}
      </S.TextWrapper>

      <S.AnalyticsWrapper>
        <Tag rightIcon={<Heart width={18} />} title={`${data.favorites}`} />
        <Tag
          rightIcon={
            <Clock className="hour" height={18} width={18} color="#04D361" />
          }
          title={data.updatedAt}
        />
      </S.AnalyticsWrapper>
    </S.Container>
  );
};
