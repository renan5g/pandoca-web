import styled, { css } from 'styled-components';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    grid-area: MC;

    display: flex;
    flex-direction: column;

    padding: 8px 24px;
    gap: 24px;

    max-height: calc(100vh - 84px);
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.SHAPES_TERTIARY};
      border-radius: 4px;
    }
  `}
`;
