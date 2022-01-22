import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    width: 100%;
    height: 100%;

    gap: 8px;
    padding: 8px 16px;
    border-radius: 8px;

    background-color: ${theme.colors.SHAPES};
    box-shadow: ${theme.colors.SHADOW_BASE};

    > svg {
      font-size: 2em;
      color: ${theme.colors.TEXT_INPUT};
    }
  `}
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    font-size: ${theme.fonts.SIZES[16]};
    border: none;
    outline: none;

    &::placeholder {
      color: ${theme.colors.TEXT_INPUT};
    }
  `}
`;
