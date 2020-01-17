import React from 'react';
import { render } from '@testing-library/react';
import Players from './Players';

test('Cards are rendered', () => {
    const { getByTestId } = render(<Players />);
    getByTestId(/data-list/i);
  });

