import { css } from 'styled-components';
import { pxToRem } from '@shared/css';

export const spaces = {
  p: (value: number) => css`
    padding: ${pxToRem(value)};
  `,
  py: (value: number) => css`
    padding-top: ${pxToRem(value)};
    padding-bottom: ${pxToRem(value)};
  `,
  px: (value: number) => css`
    padding-left: ${pxToRem(value)};
    padding-right: ${pxToRem(value)};
  `,
  m: (value: number) => css`
    margin: ${pxToRem(value)};
  `,
  mx: (value: number) => css`
    margin-left: ${pxToRem(value)};
    margin-right: ${pxToRem(value)};
  `,
  my: (value: number) => css`
    margin-top: ${pxToRem(value)};
    margin-bottom: ${pxToRem(value)};
  `,
};

export const align = {
  center: () => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};
