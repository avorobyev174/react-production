import { Fragment, memo, type ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Dropdown.module.scss'
import popupStyles from '../../styles/popup.module.scss';
import { type TDropDownDirection } from '@/shared/types/ui';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirectionClass } from '../../styles/const';

export interface IDropDownItem {
  href?: string;
  content: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}
interface IDropdownProps {
  className?: string;
  items: IDropDownItem[];
  trigger: ReactNode;
  direction?: TDropDownDirection;
}

export const Dropdown = memo((props: IDropdownProps) => {
  const {
    className,
    items,
    trigger,
    direction = 'bottom right',
  } = props;
  const menuClasses = [ mapDirectionClass[ direction ]];

  return (
    <Menu
      as="div"
      className={classNames('', {}, [ className, popupStyles.popup ])}
    >
      <Menu.Button className={popupStyles.trigger}>{ trigger }</Menu.Button>
      <Menu.Items
        className={classNames(styles.menu, {}, menuClasses)}
      >
        { items?.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              onClick={item.onClick}
              className={classNames(styles.item, {
                [ popupStyles.active ]: active,
                [ popupStyles.disabled ]: item.disabled,
              }, [])}
            >
              { item.content }
            </button>
          )
          if (item.href) {
            return (
              <Menu.Item
                key={index}
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
              >
                { content }
              </Menu.Item>
            )
          }
          return (
            <Menu.Item
              key={index}
              as={Fragment}
              disabled={item.disabled}
            >
              { content }
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
});
