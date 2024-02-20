import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Dropdown.module.scss'
import { Fragment, memo, type ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { type TDropDownDirection } from 'shared/types/ui';
import { AppLink } from 'shared/ui/AppLink/AppLink';

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

const mapDirectionClass: Record<TDropDownDirection, string> = {
  'top right': styles.optionsTopRight,
  'top left': styles.optionsTopLeft,
  'bottom left': styles.optionsBottomLeft,
  'bottom right': styles.optionsBottomRight,
}

export const Dropdown = memo((props: IDropdownProps) => {
  const {
    className,
    items,
    trigger,
    direction = 'bottom right'
  } = props;
  const menuClasses = [ mapDirectionClass[ direction ]];

  return (
    <Menu
      as="div"
      className={ classNames(styles.Dropdown, {}, [ className ]) }
    >
      <Menu.Button className={ styles.btn }>{ trigger }</Menu.Button>
      <Menu.Items
        className={ classNames(styles.menu, {}, menuClasses) }
      >
        { items?.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              onClick={ item.onClick }
              className={ classNames(styles.item, {
                [ styles.active ]: active,
                [ styles.disabled ]: item.disabled
              }, []) }
            >
              { item.content }
            </button>
          )
          if (item.href) {
            return (
              <Menu.Item
                key={ item.href }
                as={ AppLink }
                to={ item.href }
                disabled={ item.disabled }
              >
                { content }
              </Menu.Item>
            )
          }
          return (
            <Menu.Item
              key={ item.href }
              as={ Fragment }
              disabled={ item.disabled }
            >
              { content }
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  );
});
