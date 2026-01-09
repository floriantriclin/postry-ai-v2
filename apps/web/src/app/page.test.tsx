// @vitest-environment jsdom
import React from 'react';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Page from './page';

test('Page renders correctly', () => {
  render(<Page />);
  expect(screen.getByText(/Hello World - postry.ai/i)).toBeInTheDocument();
});
