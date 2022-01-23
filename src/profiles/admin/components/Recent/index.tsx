import { Heading } from '@components/Heading';
import { List } from '@components/List';

import { Chapter } from '../Chapter';
import { obrasData, IObra } from '@shared/data';

import * as S from './styles';

export const Recent = () => {
  return (
    <S.Container>
      <Heading as="h2">Últimos Laçamentos</Heading>

      <List<IObra>
        items={obrasData}
        renderItem={(chapter, i) => (
          <Chapter
            key={`${i}-${chapter.title}`}
            data={chapter}
            onSelect={() => {}}
          />
        )}
      />
    </S.Container>
  );
};
