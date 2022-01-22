import styled, { css, DefaultTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import animations from '@constants/animations';

type ButtonProps = {
  selected?: boolean;
  isHome?: boolean;
};

const buttonModifiers = {
  home: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.ORANGE};

    &:hover {
      background-color: ${theme.colors.ORANGE};
    }

    > img {
      width: 24px;
      height: 24px;
    }
  `,

  selected: (theme: DefaultTheme, isHome?: boolean) => css`
    background-color: ${!isHome && theme.colors.SHAPES_TERTIARY};

    > svg {
      color: ${theme.colors.TEXT_WHITE};
    }

    &::after {
      content: '';
      display: ${isHome ? 'none' : 'inline'};
      position: absolute;

      width: 9px;
      height: 16px;
      left: -18px;
      top: calc(50% - 7px);

      background-color: ${isHome
        ? theme.colors.ORANGE
        : theme.colors.SHAPES_TERTIARY};
      border-radius: 50%;
      border-radius: 0 3px 3px 0;

      transition: all 0.2s;
    }

    &:hover {
      background-color: ${!isHome && theme.colors.SHAPES_TERTIARY};

      > svg {
        color: ${theme.colors.TEXT_WHITE};
      }

      &::after {
        top: 1px;
        height: calc(100% - 2px);
        border-radius: 0 8px 8px 0;
      }
    }
  `,
};

export const ButtonWrapper = styled(Link)<ButtonProps>`
  ${({ theme, isHome, selected }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;
    border: none;

    width: 48px;
    height: 48px;
    border-radius: 50%;

    background-color: ${theme.colors.SHAPES_SECONDARY};

    position: relative;
    cursor: pointer;

    transition: border-radius 0.2s, background-color 0.2s;

    > svg {
      transition: color 0.2s;
      color: ${theme.colors.TEXT_ICON};
      width: 28px;
      height: 28px;
    }

    &:hover {
      border-radius: 16px;
      background-color: ${theme.colors.SHAPES_LINE};

      > svg {
        color: ${!isHome && theme.colors.TEXT_BODY};
      }
    }

    ${isHome && buttonModifiers.home(theme)};
    ${selected && buttonModifiers.selected(theme, isHome)};
  `}
`;
