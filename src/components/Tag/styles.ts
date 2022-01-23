import styled, { css } from 'styled-components';

import { Props } from '.';

export const TagContainer = styled.button<Omit<Props, 'title'>>`
  ${({ theme, bgColor = 'SHAPES_TERTIARY', textColor = 'TEXT_WHITE' }) => css`
    height: 28px;
    width: max-content;
    gap: 0.5rem;

    background: ${theme.colors[bgColor]};
    color: ${theme.colors[textColor]};
    border-radius: 5px;

    cursor: pointer;

    ${theme.spaces.px(8)}
    ${theme.spaces.py(3)}
    ${theme.align.center()}
  `}
`;
