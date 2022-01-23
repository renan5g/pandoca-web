import { ColorsOptions } from '@shared/types';
import { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

export type Props = {
  title: string;
  textColor?: ColorsOptions;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  bgColor?: ColorsOptions;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Tag = ({
  title,
  bgColor,
  textColor,
  leftIcon,
  rightIcon,
  ...rest
}: Props) => {
  return (
    <S.TagContainer bgColor={bgColor} textColor={textColor} {...rest}>
      {leftIcon || <></>}
      {title}
      {rightIcon || <></>}
    </S.TagContainer>
  );
};
