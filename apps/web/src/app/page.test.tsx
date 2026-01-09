import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Page from './page';

// Mock Supabase client
vi.mock('@/lib/supabase/server', () => ({
  createClient: vi.fn(() => ({
    auth: {
      getUser: vi.fn(() => Promise.resolve({ data: { user: null } })),
    },
  })),
}));

test('Page renders correctly', async () => {
  const ResolvedPage = await Page();
  render(ResolvedPage);
  expect(screen.getByText(/postry.ai/i)).toBeInTheDocument();
});
