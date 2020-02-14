import * as React from 'react';
import cl from 'classnames';

import BaseLayout from '@components/layout/baseLayout';

import './index.module.css';

const MainPage = () => (
  <BaseLayout>
    <div styleName="langingPage">
      <h1 styleName="title1">Рекомендательный книжный сервис</h1>
      <h2 styleName="title2">
        Искусственный интеллект поможет вам подобрать книгу
        по&nbsp;предпочтениям.
      </h2>
    </div>
  </BaseLayout>
);

export default MainPage;
