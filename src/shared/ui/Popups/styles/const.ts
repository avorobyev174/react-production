import { type TDropDownDirection } from '../../../types/ui';
import styles from './popup.module.scss';

export const mapDirectionClass: Record<TDropDownDirection, string> = {
  'top right': styles.optionsTopRight,
  'top left': styles.optionsTopLeft,
  'bottom left': styles.optionsBottomLeft,
  'bottom right': styles.optionsBottomRight,
};
