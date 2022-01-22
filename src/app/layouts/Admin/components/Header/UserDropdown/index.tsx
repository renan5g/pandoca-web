import { Container } from './styles';

type Props = {
  isOpen: boolean;
};

export const UserDropdown = ({ isOpen }: Props) => {
  return (
    <Container isOpen={isOpen}>
      <h4>UserDropdown</h4>
    </Container>
  );
};
