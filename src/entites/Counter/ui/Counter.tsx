import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entites/Counter/model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue)
  const { t } = useTranslation();
  const inc = () => {
    dispatch(counterActions.increment())
  }

  const dec = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h1 data-testid="value-title">{ counterValue }</h1>
      <Button data-testid="inc-button" onClick={ inc }>
        { t('increment') }
      </Button>
      <Button data-testid="dec-button" onClick={ dec }>
        { t('decrement') }
      </Button>
    </div>
  );
};
