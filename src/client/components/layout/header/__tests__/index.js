// yarn test src/client/components/layout/header/__tests__/index.js
import * as React from 'react';
import Header from '../index';

import {mount} from 'enzyme';

jest.unmock('../index');

describe('Header', () => {
  it('Рендер', () => {
    expect(shallow(<Header children="TEST-children" />)).toMatchSnapshot();
  });
});
