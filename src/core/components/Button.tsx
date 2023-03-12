import clsx from 'clsx';
import React from 'react';
import { Children, ClassName } from '../types';

type Variant = 'outline' | 'solid' | 'ghost' | 'text' | 'plain';
type ColorScheme = 'brand' | 'light-brand' | 'gray';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type ClassNameByVariant = Partial<Record<Variant, string>>;

const brandBackgroundClassNames: ClassNameByVariant = {
  solid: 'bg-brand-600 hover:bg-brand-700',
};
const lightBrandBackgroundClassNames: ClassNameByVariant = {
  solid: 'bg-brand-50 hover:bg-brand-100',
};
const grayBackgroundClassNames: ClassNameByVariant = {
  outline: 'bg-white hover:bg-gray-50',
};

const backgroundClassNames: Record<ColorScheme, ClassNameByVariant> = {
  brand: brandBackgroundClassNames,
  'light-brand': lightBrandBackgroundClassNames,
  gray: grayBackgroundClassNames,
};

const brandBorderColorClassNames: ClassNameByVariant = {
  outline: 'border-brand',
};
const grayBorderColorClassNames: ClassNameByVariant = {
  outline: 'border-gray-300',
};

const borderColorClassNames: Record<ColorScheme, ClassNameByVariant> = {
  brand: brandBorderColorClassNames,
  'light-brand': {},
  gray: grayBorderColorClassNames,
};

const brandTextColorClassNames: ClassNameByVariant = {
  solid: 'text-white',
};
const lightBrandTextColorClassNames: ClassNameByVariant = {
  solid: 'text-brand-700',
};
const grayTextColorClassNames: ClassNameByVariant = {
  outline: 'text-gray-800',
};
const textColorClassNames: Record<ColorScheme, ClassNameByVariant> = {
  brand: brandTextColorClassNames,
  'light-brand': lightBrandTextColorClassNames,
  gray: grayTextColorClassNames,
};

const paddingClassNames: Record<Size, string> = {
  xs: 'py-1 px-[10px]',
  sm: 'py-2 px-[18px]',
  md: 'py-[10px] px-5',
  lg: 'py-[18px] px-5',
  xl: 'py-4 px-[30px]',
};

const heightClassNames: Record<Size, string> = {
  xs: 'h-[36px]',
  sm: 'h-[40px]',
  md: 'h-[44px]',
  lg: 'h-[48px]',
  xl: 'h-[60px]',
};

const fontSizeClassNames: Record<Size, string> = {
  xs: 'text-sm',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-md',
  xl: 'text-lg',
};

export type ButtonProps = Children &
  ClassName &
  Omit<JSX.IntrinsicElements['button'], 'ref'> & {
    variant?: Variant;
    colorScheme?: ColorScheme;
    light?: boolean;
    size?: Size;
    pill?: boolean;
    square?: boolean;
    loading?: boolean;
    style?: React.CSSProperties;
    ref?: React.RefObject<HTMLButtonElement>;
  };

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'solid',
      colorScheme = 'brand',
      className,
      children,
      type = 'button',
      disabled,
      loading,
      size = 'md',
      pill,
      square,
      ...restProps
    },
    ref
  ) => {
    if (variant === 'plain')
      return (
        <button
          {...restProps}
          onClick={!disabled ? restProps.onClick : undefined}
          type={type}
          ref={ref}
          className={clsx(className)}
          disabled={disabled}>
          {children}
        </button>
      );

    const backgroundColorClassName = backgroundClassNames[colorScheme][variant];
    const borderColorClassName = borderColorClassNames[colorScheme][variant] ?? 'border-[transparent]';
    const textColorClassName = textColorClassNames[colorScheme][variant];
    const paddingClassName = !square && paddingClassNames[size];
    const heightClassName = !square && heightClassNames[size];
    const fontSizeClassName = fontSizeClassNames[size];
    const borderRadiusClassName = pill ? 'rounded-full' : 'rounded-md';
    const fontWeightClassName = 'font-medium';

    return (
      <button
        {...restProps}
        disabled={disabled || loading}
        ref={ref}
        type={type}
        className={clsx(
          'inline-flex justify-center items-center gap-[10px] border select-none transition-all leading-5 max-h-full font-semiBold',
          heightClassName,
          paddingClassName,
          textColorClassName,
          backgroundColorClassName,
          borderColorClassName,
          fontWeightClassName,
          borderRadiusClassName,
          fontSizeClassName,
          {
            disabled,
            'aspect-square': square,
          },
          className
        )}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
