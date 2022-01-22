import * as S from './styles';
import {
  Home,
  Folder,
  DocumentArrowUp,
  BookmarkMultiple,
  Settings,
} from 'styled-icons/fluentui-system-filled';
import { UserCog } from 'styled-icons/fa-solid';

import { ChannelButton } from './ChannelButton';

export const Sidebar = () => {
  return (
    <S.Container>
      <ChannelButton isHome to="/" />

      <S.Separator />

      <ChannelButton icon={<Home />} to="/" />
      <ChannelButton icon={<Folder />} to="/obras" />
      <ChannelButton icon={<DocumentArrowUp />} to="/upload" />
      <ChannelButton icon={<BookmarkMultiple />} to="/category" />
      <ChannelButton icon={<UserCog />} to="/users" />
      <ChannelButton icon={<Settings />} to="/config" />
    </S.Container>
  );
};
