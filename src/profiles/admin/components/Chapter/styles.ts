import styled, { css } from 'styled-components';

import media from 'styled-media-query';

const layoutSmall = () => css`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  overflow: hidden;

  .__texts-small {
    max-width: 300px;

    > button {
      display: none;
    }
  }

  .__cover-small {
    width: 80%;
    height: 180px;
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 110px auto 190px;
    cursor: pointer;

    border-radius: 8px;
    padding: 16px;
    gap: 16px;

    background: ${theme.colors.SHAPES};
    box-shadow: ${theme.colors.SHADOW_BASE};
    border: 3px solid;
    border-color: transparent;

    transition: border-color 0.5s transform 0.15s ease;

    &:hover {
      border-color: ${theme.colors.ORANGE};

      div${CoverWrapper}::before, div${CoverWrapper} > svg {
        opacity: 1;
      }
    }

    &:active {
      transform: scale(0.99);
    }

    ${media.lessThan('medium')`
      ${layoutSmall()}
    `}
  `}
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

export const AnalyticsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const CoverWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  width: 110px;
  height: 110px;
  cursor: pointer;

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

export const Cover = styled.img<{ size?: string }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  flex-shrink: 0;
`;

export const Texts = styled.div`
  > h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: max-content;
  }

  > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 300px;
  }
`;

export const Tag = styled.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  height: 26px;
  padding: 5px 8px;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;

  background: ${({ theme }) => theme.colors.SHAPES_TERTIARY};
  color: ${({ theme }) => theme.colors.TEXT_WHITE};
  border-radius: 5px;

  > svg.hour {
    color: ${({ theme }) => theme.colors.SUCCESS};
  }
`;
