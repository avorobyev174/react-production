import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import styles from './Input.module.scss'
import { type ChangeEvent, type InputHTMLAttributes, memo, type MutableRefObject, useEffect, useRef, useState } from 'react';

type THtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' >

interface IInputProps extends THtmlInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

// eslint-disable-next-line react/display-name
export const Input = memo(({
  className,
  value,
  type = 'text', onChange,
  placeholder,
  autofocus = false,
  readonly,
  ...otherProps
}: IInputProps) => {
  const [ isFocused, setIsFocused ] = useState(false)
  const [ caretPosition, setCaretPosition ] = useState(0)
  const ref = useRef() as MutableRefObject<HTMLInputElement>;
  const isCaretVisible = isFocused && !readonly;

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

  const mods: Mods = {
    [ styles.readonly ]: readonly
  }

  return (
    <div className={ classNames(styles.InputWrapper, mods, [ className ])}>
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
          readOnly={ readonly }
          { ...otherProps }
        />
        { isCaretVisible &&
          <span
            className={ styles.caret }
            style={{ left: `${ caretPosition * 7 }px` }}
          />
        }
      </div>
    </div>
  );
});
