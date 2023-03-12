import clsx from 'clsx';
import React from 'react';
import { BaseInput, BaseInputProps } from './BaseInput';

export type InputProps = BaseInputProps & {
  inputRef?: React.RefObject<any>;
  label?: React.ReactNode;
  error?: boolean;
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
        {!!label && <label className='block mb-[6px] text-sm font-medium'>{label}</label>}
        <div
          className={clsx('border h-11 w-full rounded-md flex items-center px-[14px]', {
            'border-gray-300 hover:border-gray-400 focus-within:!border-gray-600': !error,
            'border-red-300 hover:border-red-400 focus-within:!border-red-600': error,
          })}>
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
