import { Container } from './styles';
import { Text } from '@components/Text';

type Props = {
  source: string;
  name: string;
};

export const Scan = ({ source, name }: Props) => {
  return (
    <Container>
      <img src={source} alt={name} />
      <Text>{name}</Text>
    </Container>
  );
};
