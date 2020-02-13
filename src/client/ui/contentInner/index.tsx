import * as React from 'react';
import cl from 'classnames';

import './contentInner.module.css';

type ContentInnerProps = {
  styleName?: string;
  withMaxWidth?: boolean;
  children?: React.ReactNode;
};

const ContentInner = ({children, withMaxWidth}: ContentInnerProps) => (
  <div
    styleName={cl('contentInner', {
      withMaxWidth: withMaxWidth,
    })}
  >
    {children}
  </div>
);

export default ContentInner;
