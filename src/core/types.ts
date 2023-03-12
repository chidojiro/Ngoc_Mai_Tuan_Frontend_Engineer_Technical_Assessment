import { ReactNode } from 'react';

export type HTMLElementOrHTMLElementRef = HTMLElement | React.RefObject<HTMLElement>;

export type WithAsProps<
  TProps,
  TDefaultElement extends keyof JSX.IntrinsicElements,
  TCustomElement extends keyof JSX.IntrinsicElements = keyof JSX.IntrinsicElements
> =
  | (TProps & { as: TCustomElement } & JSX.IntrinsicElements[TCustomElement])
  | (TProps & JSX.IntrinsicElements[TDefaultElement]);

export type ClassName = {
  className?: string;
};

export type Children = {
  children?: React.ReactNode;
};

export type OpenClose = {
  open?: boolean;
  defaultOpen?: boolean;
  onClose?: () => void;
};

export type Override<TOriginal, TOverride> = Omit<TOriginal, keyof TOverride> & TOverride;

export type Option<TValue = string> = { label: ReactNode; value: TValue } & Record<string, any>;
