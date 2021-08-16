// yarn test src/components/layout/header/header.test.tsx

import React from 'react';
import {render, screen} from '@testing-library/react';
import Header from './';

test('Header contains correct text', () => {
  render(<Header />);
  const children = screen.getByText('My React and TypeScript App');
  expect(children).toBeInTheDocument();
});
