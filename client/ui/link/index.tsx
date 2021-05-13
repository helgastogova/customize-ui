import * as React from 'react';
import cl from 'classnames';
import noop from '../../../utils/noop';

import {ReactEventHandler} from 'types/event';
import {MouseEventHandler} from 'react';

import './link.module.css';

export type LinkProps = {
  className?: string;
  to?: string;
  children?: React.ReactNode;
  display?: 'block' | 'inline-block';
  align?: 'center' | 'rignt';
  bold?: boolean;
  target?: string;
  rel?: string;
  title?: string;
  name?: string;
  design?: 'tag' | 'plain-text';
  size?: '14' | '16' | '20';
  onClick?: ReactEventHandler;
  preventDefault?: boolean;
  disabled?: boolean;
  cursorDefault?: boolean;
  extraOnClick?: ReactEventHandler;
  // Вызовется без event.preventDefault()
  color?: 'main' | 'black' | 'white';
  tabIndex?: number;
};

export type PropertiesType = {
  className: string;
  href: string;
  target: string;
  onClick: MouseEventHandler<HTMLAnchorElement>;
  title?: string;
  rel?: string;
  name?: string;
  tabIndex?: number;
};

const Link = (props: LinkProps) => {
  const {
    className,
    to,
    align,
    children,
    bold,
    target,
    rel,
    title,
    onClick,
    underlined,
    disabled,
    size = '',
    cursorDefault,
    extraOnClick,
    name,
    preventDefault = true,
    color = 'main',
    tabIndex,
    design,
    display,
  } = props;

  const handleClick: MouseEventHandler<HTMLAnchorElement> = event => {
    if (extraOnClick) extraOnClick(event);
    if (!onClick) return;
    if (event.metaKey || event.ctrlKey) return; // cmd + click - должен открывать новую вкладку

    if (preventDefault) event.preventDefault();
    onClick(event);
  };

  const styleName = cl(
    'link',
    {
      bold: bold,
      underlined: underlined,
      disabled: disabled,
      cursorDefault: cursorDefault,
      [`align_${align}`]: !!align,
      [`design_${design}`]: !!design,
      [`display_${display}`]: display,
      [`size_${size}`]: !!size,
      [`color_${color}`]: color !== 'main',
    },
    className,
  );

  const properties: PropertiesType = {
    href: disabled ? '#' : to || '#',
    target: target || '_self',
    onClick: disabled ? noop : handleClick,
  };
  if (title) properties.title = title;
  if (rel) properties.rel = rel;
  if (name) properties.name = name;
  if (tabIndex) properties.tabIndex = tabIndex;

  return (
    <a styleName={styleName} {...properties}>
      {children}
    </a>
  );
};

export default Link;
