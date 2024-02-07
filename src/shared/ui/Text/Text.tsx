import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss'

export enum ETextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

export enum ETextAlign {
  RIGHT = 'right',
  CENTER = 'center',
  LEFT = 'left'
}

export enum ETextSize {
  M = 'size_m',
  L = 'size_l',
}

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: ETextTheme;
  align?: ETextAlign;
  size?: ETextSize;
}

export const Text = (props: ITextProps) => {
  const {
    className,
    title,
    text,
    theme = ETextTheme.PRIMARY,
    align = ETextAlign.LEFT,
    size = ETextSize.M
  } = props;
  const mods: Mods = {
    [ styles[ theme ] ]: true,
    [ styles[ align ] ]: true,
    [ styles[ size ] ]: true
  };

  return (
    <div className={ classNames(styles.Text, mods, [ className ])}>
      { title && <p className={ styles.title }>{ title }</p> }
      { text && <p className={ styles.text }>{ text }</p> }
    </div>
  );
};
