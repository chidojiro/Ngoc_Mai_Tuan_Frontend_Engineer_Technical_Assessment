import clsx from 'clsx';
import { MutableRefObject, useEffect } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { useScrollDisable } from '../hooks';
import { Children, ClassName } from '../types';
import { Button } from './Button';
import { Portal } from './Portal';

export type ModalProps = ClassName &
  Children & {
    initialFocus?: MutableRefObject<HTMLElement | null>;
    open: boolean;
    onClose?: () => void;
    showCloseButton?: boolean;
    closeOnClickOutside?: boolean;
  };

const ModalTitle = ({ className, ...restProps }: JSX.IntrinsicElements['h3']) => (
  <h3 className={clsx('font-medium mb-6 text-center text-h6', className)} {...restProps}></h3>
);

export const Modal = ({
  className,
  children,
  initialFocus,
  open,
  onClose,
  showCloseButton = true,
  closeOnClickOutside = true,
}: ModalProps) => {
  useScrollDisable(open);

  useEffect(() => {
    if (open) {
      initialFocus?.current?.focus();
    }
  }, [open, initialFocus]);

  if (!open) return null;

  return (
    <Portal>
      <div className={clsx('fixed z-40 inset-0')}>
        <div
          className='relative flex items-center justify-center h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'
          onClick={e => e.stopPropagation()}>
          <div
            className='fixed inset-0 bg-black bg-opacity-50 transition-opacity'
            onClick={closeOnClickOutside ? onClose : undefined}></div>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
            &#8203;
          </span>
          <div
            className={clsx(
              'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
              'inline-block bg-white rounded text-left shadow-xl transform transition-all',
              'p-5 w-[550px] min-h-[200px]',
              'max-h-[95vh] lg:max-h-[75vh] overflow-auto',
              className
            )}>
            {showCloseButton && (
              <Button variant='plain' className='absolute top-6 right-4' onClick={onClose}>
                <HiOutlineX size={20} />
              </Button>
            )}
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

Modal.Title = ModalTitle;
