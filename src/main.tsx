import React from 'react';
import Block from './client/ui/block';
import ContentInner from './client/ui/contentInner';

import './index.module.css';

export default class App extends React.Component {
  render() {
    return (
      <ContentInner>
        <div styleName="langingPage">
          <h1 styleName="title1">Рекомендательный книжный сервис</h1>
          <h2 styleName="title2">
            Искусственный интеллект поможет вам подобрать книгу
            по&nbsp;предпочтениям.
          </h2>
          <p>Запуск в конце 2020</p>
        </div>
      </ContentInner>
    );
  }
}
