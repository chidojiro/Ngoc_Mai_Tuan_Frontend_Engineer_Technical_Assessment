import clsx from 'clsx';
import React from 'react';
import { Icon, IconName } from '../Icon';
import { BaseInput, BaseInputProps } from './BaseInput';

export type InputProps = BaseInputProps & {
  helperText?: React.ReactNode;
  inputRef?: React.RefObject<any>;
  isTrigger?: boolean;
  isLoading?: boolean;
  label?: React.ReactNode;
  required?: boolean | null;
  leftIcon?: IconName;
  rightIcon?: IconName;
  size?: 'sm' | 'md';
  clearable?: boolean;
};

export const Input = React.forwardRef(
  (
    {
      className,
      clearable,
      leftIcon,
      rightIcon,
      error,
      disabled,
      size = 'md',
      required,
      label,
      helperText,
      inputRef,
      style,
      onClick,
      readOnly,
      isTrigger,
      isLoading,
      ...restProps
    }: InputProps,
    ref: any
  ) => {
    const internalInputRef = React.useRef<any>();
    React.useImperativeHandle(ref, () => internalInputRef.current, []);

    const handleMouseDown: React.MouseEventHandler<HTMLInputElement> = e => {
      if (readOnly) {
        return;
      }

      // Do not focus input when clicking on the input itself
      // This is to make sure the user can jump to a particular caret position
      // and/or highlighting input text
      if ((e.target as any)?.tagName?.toLowerCase() === 'input' && document.activeElement === e.target) {
        return;
      }

      e.preventDefault();

      internalInputRef.current?.querySelector('input')?.focus();
    };

    return (
      <div
        className={clsx(className)}
        onMouseDown={handleMouseDown}
        onClick={onClick}
        ref={internalInputRef}
        style={style}>
        {!!label && <label className='mb-[6px] text-sm font-medium'>{label}</label>}
        <div className='border border-gray-300 h-11 w-full rounded-md flex items-center px-[14px]'>
          {!!leftIcon && <Icon name={leftIcon} className='mr-[10px] text-gray-500'></Icon>}
          <BaseInput
            className='outline-none border-none w-full'
            error={error}
            disabled={disabled || readOnly}
            ref={inputRef}
            readOnly={readOnly}
            {...restProps}
          />
          {!!rightIcon && <div></div>}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';
