import { WithChildren, ColorsOptions } from '@shared/types';
import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

type ButtonProps = {
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  textColor?: ColorsOptions;
  bgColor?: ColorsOptions;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type Props = WithChildren<ButtonProps>;

export const Button = ({
  children,
  bgColor,
  textColor,
  leftIcon,
  rightIcon,
  ...rest
}: Props) => {
  return (
    <S.Container bgColor={bgColor} textColor={textColor} {...rest}>
      {leftIcon || <></>}
      {children}
      {rightIcon || <></>}
    </S.Container>
  );
};
