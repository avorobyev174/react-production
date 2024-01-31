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

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: ETextTheme;
  align?: ETextAlign;
}

export const Text = ({ className, title, text, theme = ETextTheme.PRIMARY, align = ETextAlign.LEFT }: ITextProps) => {
  const mods: Mods = {
    [ styles[ theme ] ]: true,
    [ styles[ align ] ]: true
  };

  return (
    <div className={ classNames(styles.Text, mods, [ className ])}>
      { title && <p className={ styles.title }>{ title }</p> }
      { text && <p className={ styles.text }>{ text }</p> }
    </div>
  );
};
