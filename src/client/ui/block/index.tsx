import * as React from 'react';
import cl from 'classnames';

import './block.module.css';

export type BlockProps = {
  styleName?: string;
  children?: React.ReactNode;
  tagName?: 'span' | 'div';
  borderRadius?: '0' | '5' | '10' | '15';
  padding?: '0' | '7' | '10' | '20';
  withBorder?: boolean;
  withShadow?: boolean;
  background?: 'white' | 'transparent';
};

const Block = (props: BlockProps) => {
  const {
    children,
    tagName: TagName = 'div',
    withBorder,
    padding,
    borderRadius = '5',
    background = '',
    withShadow,
  } = props;

  const styleName = cl('block', `borderRadius-${borderRadius}`, {
    withBorder: withBorder,
    withShadow: withShadow,
    [`padding-${padding}`]: padding !== '0',
    [`background-${background}`]: !!background,
  });

  return <TagName styleName={styleName}>{children}</TagName>;
};

export default Block;
