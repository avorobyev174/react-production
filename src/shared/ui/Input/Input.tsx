import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss'
import { type ChangeEvent, type InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';

type THtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface IInputProps extends THtmlInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

// eslint-disable-next-line react/display-name
export const Input = memo(({
  className,
  value,
  type = 'text', onChange,
  placeholder,
  autofocus = false,
  ...otherProps
}: IInputProps) => {
  const [ isFocused, setIsFocused ] = useState(false)
  const [ caretPosition, setCaretPosition ] = useState(0)
  const ref = useRef<HTMLInputElement>();

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current.focus();
    }
  }, [ autofocus ])

  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange?.(evt.target.value);
    setCaretPosition(evt.target.value.length)
  }
  const onBlur = () => {
    setIsFocused(false);
  }

  const onFocus = () => {
    setIsFocused(true);
  }

  const onSelect = (evt: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setCaretPosition(evt?.target.selectionStart);
  }

  return (
    <div className={ classNames(styles.InputWrapper, {}, [ className ])}>
      { placeholder && (<div className={ styles.placeholder }>{ `${ placeholder }>` }</div>) }
      <div className={ styles.caretWrapper }>
        <input
          ref={ ref }
          className={ styles.input }
          type={ type }
          value={ value }
          onChange={ onChangeHandler }
          onFocus={ onFocus }
          onBlur={ onBlur }
          onSelect={ onSelect }
          { ...otherProps }
        />
        { isFocused &&
          <span
            className={ styles.caret }
            style={{ left: `${ caretPosition * 7 }px` }}
          />
        }
      </div>
    </div>
  );
});
