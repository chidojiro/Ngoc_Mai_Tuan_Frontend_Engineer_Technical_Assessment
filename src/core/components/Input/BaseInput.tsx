import { forwardRef } from 'react';

type IntrinsicInputProps = Omit<JSX.IntrinsicElements['input'], 'type' | 'ref' | 'size'> & {
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  ref?: React.RefObject<HTMLInputElement>;
};
export type BaseInputProps = IntrinsicInputProps & {
  error?: boolean;
  onEsc?: React.KeyboardEventHandler<HTMLInputElement>;
  onEnter?: React.KeyboardEventHandler<HTMLInputElement>;
};

export const BaseInput = forwardRef((props: BaseInputProps, ref: any) => {
  const handleKeydown: React.KeyboardEventHandler<HTMLInputElement> = e => {
    props.onKeyDown?.(e);

    switch (e.code) {
      case 'Escape':
        return props.onEsc?.(e);
      case 'Enter':
        return props.onEnter?.(e);
      default:
        return;
    }
  };

  const { type = 'text', onEsc, onEnter, ...restProps } = props;

  return <input size={3} ref={ref} type={type} {...restProps} onKeyDown={handleKeydown} />;
});

BaseInput.displayName = 'BaseInput';
