import { render, screen } from '@testing-library/react';
import { Button, EButtonTheme } from './Button';

describe('Button', () => {
  test('button text', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  })

  test('button class', () => {
    render(<Button theme={EButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  })
});
