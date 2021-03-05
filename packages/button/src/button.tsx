import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { styled, classnames } from '@wuss-ui/system';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg' | 'xl';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const buttonStyles = {
  base: 'rounded focus:outline-none focus:ring-1 focus:ring-offset-2',
  variants: {
    primary:
      'bg-indigo-600 text-white hover:bg-indigo-800 duration-300 shadow-lg',
    secondary:
      'border border-indigo-600 hover:bg-indigo-600 hover:text-white duration-300'
  },
  sizes: {
    sm: 'p-2',
    md: 'px-4 py-2',
    lg: 'px-6 py-3',
    xl: 'px-8 py-4'
  }
};

export const StyledButton = styled.button<ButtonProps>({});

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant = 'primary', size = 'md', className, ...props },
    ref
  ) => {
    const classNames = classnames(
      buttonStyles.base,
      buttonStyles.variants[variant],
      buttonStyles.sizes[size],
      className
    );

    return (
      <StyledButton className={classNames} ref={ref} {...props}>
        {children}
      </StyledButton>
    );
  }
);
