import styled, { css } from 'styled-components';
import { animations } from '@shared/css/animations';

import { AddSquare } from 'styled-icons/fluentui-system-filled';
import LinesSvg from '@assets/images/lines.svg';
import { Button } from '@components/Button';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: relative;

    gap: 2rem;
    padding: 24px;

    background: ${theme.colors.GRADIENT_BASE};
    box-shadow: ${theme.colors.SHADOW_BASE};
    border-radius: 20px;

    &::before {
      content: '';

      background: url(${LinesSvg}) no-repeat 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    ${animations.slide('top')}
  `}
`;

export const TextsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 8px;

    color: ${theme.colors.TEXT_WHITE};

    > strong {
      font-size: ${theme.fonts.SIZES[24]};
    }
  `}
`;

export const ButtonWrapper = styled(Button)`
  ${({ theme }) => css`
    z-index: ${theme.zIndices.BASE};
  `}
`;

export const AddIcon = styled(AddSquare)`
  ${({ theme }) => css`
    color: ${theme.colors.ORANGE};
    width: 28px;
    height: 28px;

    ${ButtonWrapper}:hover & {
      ${animations.jello()}
    }
  `}
`;
