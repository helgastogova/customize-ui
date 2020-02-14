import * as React from 'react';

export type ReactEvent = {
  preventDefault: () => void;
  stopPropagation: () => void;
  target: ReactEventTarget;
  key: string;
  keyCode: number;
  metaKey: boolean;
  ctrlKey: boolean;
};
export type ReactEventTarget = {
  offsetWidth: number;
  offsetHeight: number;
  scrollWidth: number;
  scrollLeft: number;
  value: string;
  checked?: boolean;
  type: string;
  name: string;
  href?: string;
  clientHeight?: number;
  disabled?: boolean;
  className: string;
  getBoundingClientRect: () => {
    x: number;
    y: number;
    width: number;
    height: number;
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
};
export type ReactEventState = {
  state: {
    action: string;
  };
};
export type ReactEventHandler = React.EventHandler<any>;
