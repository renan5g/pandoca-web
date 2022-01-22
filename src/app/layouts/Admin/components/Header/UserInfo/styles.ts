import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    height: 100%;
    min-width: 240px;

    /* gap: 16px; */
    padding: 8px 16px;
    border-radius: 8px;

    background-color: ${theme.colors.SHAPES};
    box-shadow: ${theme.colors.SHADOW_BASE};
  `}
`;

export const InfoWrapper = styled.div`
  ${({ theme }) => css`
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: ${theme.fonts.SIZES[12]};

    > strong {
      font-weight: 600;
      font-size: ${theme.fonts.SIZES[16]};
    }
  `}
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  > svg {
    width: 20px;
  }

  > img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`;
