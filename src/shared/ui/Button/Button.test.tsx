import { render, screen } from '@testing-library/react';
import { Button, EThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('button text', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  })

  test('button class', () => {
    render(<Button theme={ EThemeButton.CLEAR }>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  })
});
