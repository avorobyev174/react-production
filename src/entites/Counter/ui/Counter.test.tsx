import { screen } from '@testing-library/react';
import { Counter } from './Counter';
import { componentRender } from 'shared/config/tests/componentRender/componentRender';
import { userEvent } from '@storybook/test';

describe('Counter', () => {
  test('with only first param', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 }
      }
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  })

  test('increment', async () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 }
      }
    });
    await userEvent.click(screen.getByTestId('inc-button'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  })

  test('decrement', async () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 }
      }
    });
    await userEvent.click(screen.getByTestId('dec-button'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  })
});
