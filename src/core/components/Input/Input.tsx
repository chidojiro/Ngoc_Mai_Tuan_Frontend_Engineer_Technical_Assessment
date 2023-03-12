import clsx from 'clsx';
import React from 'react';
import { BaseInput, BaseInputProps } from './BaseInput';

export type InputProps = BaseInputProps & {
  helperText?: React.ReactNode;
  inputRef?: React.RefObject<any>;
  isTrigger?: boolean;
  isLoading?: boolean;
  label?: React.ReactNode;
  required?: boolean | null;
  size?: 'sm' | 'md';
  clearable?: boolean;
};

export const Input = React.forwardRef(
  ({ className, error, disabled, label, inputRef, style, onClick, readOnly, ...restProps }: InputProps, ref: any) => {
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
          <BaseInput
            className='outline-none border-none w-full'
            error={error}
            disabled={disabled || readOnly}
            ref={inputRef}
            readOnly={readOnly}
            {...restProps}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';
