import { pxToRem } from '@shared/css';
import styled, { css } from 'styled-components';

import { Props } from '.';

export const TextContainer = styled.p<Props>`
  ${({ theme, textColor = 'TEXT_BODY', fontSize = 16, bold = false }) => css`
    color: ${theme.colors[textColor]};
    font-size: ${pxToRem(fontSize)};
    font-weight: ${bold && theme.fonts.MEDIUM};
  `}
`;
