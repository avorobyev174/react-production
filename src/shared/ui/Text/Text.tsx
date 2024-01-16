import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss'

export enum ETextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: ETextTheme;
}

export const Text = ({ className, title, text, theme = ETextTheme.PRIMARY }: ITextProps) => {
  return (
    <div className={ classNames(styles.Text, { [ styles[ theme ] ]: true }, [ className ])}>
      { title && <p className={ styles.title }>{ title }</p> }
      { text && <p className={ styles.text }>{ text }</p> }
    </div>
  );
};
