import { useState } from 'react';

import * as S from './styles';

import { ArrowDown, ArrowUp } from 'styled-icons/evaicons-solid';
import { UserDropdown } from '../UserDropdown';
import { Text } from '@components/Text';

export const UserInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    user: { username, avatar },
  } = {
    user: {
      username: 'Baiano',
      avatar: 'https://github.com/renan5g.png',
    },
  };

  return (
    <S.Container>
      <S.InfoWrapper>
        <Text fontSize={13}>Seja bem vindo,</Text>
        <Text bold textColor="TEXT_HEADING">
          {username}
        </Text>
      </S.InfoWrapper>

      <S.AvatarWrapper onClick={() => setIsOpen(!isOpen)}>
        <img src={avatar} alt={username} />

        {isOpen ? <ArrowUp width={16} /> : <ArrowDown width={16} />}

        <UserDropdown isOpen={isOpen} />
      </S.AvatarWrapper>
    </S.Container>
  );
};
