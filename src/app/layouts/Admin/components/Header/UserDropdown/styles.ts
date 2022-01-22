import { animations } from '@shared/css/animations';
import styled, { css } from 'styled-components';

export const Container = styled.div<{ isOpen?: boolean }>`
  ${({ theme, isOpen }) => css`
    position: absolute;
    right: 0;
    top: calc(100% + 16px);

    padding: 16px;
    border-radius: 8px;

    background: ${theme.colors.SHAPES};
    box-shadow: ${theme.colors.SHADOW_BASE};

    z-index: 1000;

    &::before {
      content: '';
      position: absolute;
      top: -8px;
      right: 19px;
      width: 0px;
      height: 0px;
      border-style: solid;
      border-width: 0px 8px 8px;
      border-color: transparent transparent ${theme.colors.SHAPES};
    }

    ${isOpen && animations.swing('in')}
    ${!isOpen && animations.swing('out')}
  `}
`;
