import { classNames, type TMods } from 'shared/lib/classNames/classNames';
import styles from './Text.module.scss'

export enum ETextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
  INVERTED = 'inverted',
}

export enum ETextAlign {
  RIGHT = 'right',
  CENTER = 'center',
  LEFT = 'left'
}

export enum ETextSize {
  S = 'size_s',
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

type THeaderTag = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<ETextSize, THeaderTag> = {
  [ ETextSize.S ]: 'h3',
  [ ETextSize.M ]: 'h2',
  [ ETextSize.L ]: 'h1',
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
  const mods: TMods = {
    [ styles[ theme ] ]: true,
    [ styles[ align ] ]: true,
    [ styles[ size ] ]: true
  };
  const HeaderTag = mapSizeToHeaderTag[ size ];

  return (
    <div className={ classNames(styles.Text, mods, [ className ])}>
      { title && <HeaderTag className={ styles.title }>{ title }</HeaderTag> }
      { text && <p className={ styles.text }>{ text }</p> }
    </div>
  );
};
