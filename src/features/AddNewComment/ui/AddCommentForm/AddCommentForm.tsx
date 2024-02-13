import { classNames } from 'shared/lib/classNames/classNames';
import styles from './AddCommentForm.module.scss'
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getAddCommentFormText } from 'features/AddNewComment/model/selectors/addCommentFormSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from 'features/AddNewComment/model/slice/addCommentFormSlice';
import { DynamicModuleLoader, type TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

export interface IAddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const initialReducers: TReducersList = {
  addCommentForm: addCommentFormReducer
}

export const AddCommentForm = memo(({ className, onSendComment }: IAddCommentFormProps) => {
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [ dispatch ]);

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [ onCommentTextChange, onSendComment, text ]);

  return (
    <DynamicModuleLoader
      name="addCommentForm"
      reducers={ initialReducers }
    >
      <div className={ classNames(styles.AddCommentForm, {}, [ className ]) }>
        <Input
          className={ styles.input }
          placeholder={ t('Введите текст комментария') }
          value={ text || '' }
          onChange={ onCommentTextChange }
        />
        <Button onClick={ onSendHandler }>
          { t('Отправить') }
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default memo(AddCommentForm);
