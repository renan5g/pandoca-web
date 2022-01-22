import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    grid-area: SN;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${theme.colors.SHAPES};
    box-shadow: ${theme.colors.SHADOW_BASE};

    gap: 1rem;
    padding: 11px 0;
    max-height: 100vh;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      display: none;
    }
  `}
`;

export const Separator = styled.div`
  ${({ theme }) => css`
    width: 32px;
    border-bottom: 2px solid ${theme.colors.SHAPES_LINE};
  `}
`;
