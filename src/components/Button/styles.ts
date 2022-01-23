import styled, { css } from 'styled-components';

import { Props } from '.';

export const Container = styled.button<Omit<Props, 'children'>>`
  ${({ theme, bgColor = 'SHAPES_TERTIARY', textColor = 'TEXT_WHITE' }) => css`
    width: max-content;
    border-radius: 0.5rem;
    gap: 0.5rem;

    background: ${theme.colors[bgColor]};
    color: ${theme.colors[textColor]};
    box-shadow: ${theme.colors.SHADOW_BASE};
    cursor: pointer;

    ${theme.spaces.py(8)}
    ${theme.spaces.px(16)}
    ${theme.align.center()}
  `}
`;
