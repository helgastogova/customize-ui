import * as React from 'react';

import ContentInner from '@ui/contentInner';
import Link from '@ui/link';

import BaseLayout from '@components/layout/baseLayout';

import './styles/index.module.css';

export default class App extends React.Component {
  render() {
    return (
      <BaseLayout>
        <Link to="111">завлао</Link>
        <div styleName="langingPage">
          <h1 styleName="title1">Рекомендательный книжный сервис</h1>
          <h2 styleName="title2">
            Искусственный интеллект поможет вам подобрать книгу
            по&nbsp;предпочтениям.
          </h2>
          <p>Запуск в конце 2020</p>
        </div>
      </BaseLayout>
    );
  }
}
