import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

  test('Header is found', () => {
    const { getByText } = render(<Navbar />);
    getByText(/world/i);
  });
  