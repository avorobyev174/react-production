import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Popover.module.scss'
import { memo, type ReactNode } from 'react';
import { type TDropDownDirection } from 'shared/types/ui';
import { Popover as HPopover } from '@headlessui/react';
import { mapDirectionClass } from 'shared/ui/Popups/styles/const';
import popupStyles from '../../styles/popup.module.scss';

interface IPopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: TDropDownDirection;
  children: ReactNode;
}

export const Popover = memo((props: IPopoverProps) => {
  const {
    className,
    trigger,
    direction = 'bottom right',
    children
  } = props;
  const menuClasses = [ mapDirectionClass[ direction ]];

  return (
    <HPopover
      className={ classNames(styles.Popover, {}, [ className, popupStyles.popup ]) }
    >
      <HPopover.Button className={ popupStyles.trigger }>
        { trigger }
      </HPopover.Button>
      <HPopover.Panel className={ classNames(styles.panel, {}, menuClasses) }>
        { children }
      </HPopover.Panel>
    </HPopover>
  );
});
