import styled, { css, DefaultTheme } from 'styled-components';

import { Props } from '.';

// export const Wrapper = styled.h2<HeadingProps>`
//   ${({ theme, color, }) => css`
//     color: ${theme.colors[color!]};
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     white-space: nowrap;
//     ${!!size && wrapperModifiers[size](theme)};
//   `}
// `;

const headingModifiers = {
  h1: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.SIZES[40]};
    line-height: 50px;
  `,
  h2: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.SIZES[28]};
  `,
  h3: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.SIZES[24]};
  `,
  h4: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.SIZES[18]};
  `,
};

export const HeadingContainer = styled.div.attrs<Props>(({ as }) => ({
  as,
}))<Props>`
  ${({ theme, textColor = 'TEXT_HEADING', as = 'h1' }) => css`
    color: ${theme.colors[textColor]};
    ${headingModifiers[as](theme)}
  `}
`;
