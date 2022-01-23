import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    text-align: center;
    cursor: pointer;

    padding: 1rem;
    gap: 0.5rem;
    border-radius: 0.5rem;

    background: ${theme.colors.SHAPES};
    box-shadow: ${theme.colors.SHADOW_BASE};
    border: 3px solid transparent;

    transition: border-color 0.5s;

    &:hover {
      border-color: ${theme.colors.ORANGE};
    }

    &:active {
      transform: scale(0.99);
    }

    &:hover {
      div${CoverWrapper} {
        &::before {
          opacity: 1;
        }

        > svg {
          opacity: 1;
        }
      }
    }
  `};
`;

export const CoverWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  > svg {
    position: absolute;
    transition: opacity 0.5s;
    color: #fff;
    z-index: 400;
    opacity: 0;
  }

  &::before {
    content: '';
    position: absolute;
    transition: opacity 0.5s;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
  }
`;

export const TextsWrapper = styled.div`
  overflow: hidden;

  > h2 {
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
