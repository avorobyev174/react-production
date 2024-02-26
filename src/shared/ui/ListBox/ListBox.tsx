import { Fragment, type ReactNode } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import styles from './ListBox.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import { type TDropDownDirection } from 'shared/types/ui';

export interface IListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface IListBoxProps {
  items?: IListBoxItem[];
  className?: string;
  value: string;
  defaultValue?: string;
  onChange: <T extends string>(value: T) => void;
  readonly?: boolean;
  direction?: TDropDownDirection;
  label?: string;
}

const mapDirectionClass: Record<TDropDownDirection, string> = {
  'top right': styles.optionsTopRight,
  'top left': styles.optionsTopLeft,
  'bottom left': styles.optionsBottomLeft,
  'bottom right': styles.optionsBottomRight,
}

export const ListBox = (props: IListBoxProps) => {
  const {
    items,
    className,
    value,
    onChange, defaultValue,
    readonly,
    direction = 'bottom left',
    label
  } = props;

  const optionsClasses = [ mapDirectionClass[ direction ] ]

  return (
    <HStack>
      { label && <span>{ label + '>' }</span> }
      <HListBox
        value={ value }
        disabled={ readonly }
        onChange={ onChange }
        as="div"
        className={ classNames(styles.ListBox, {}, [ className ]) }
      >
        <HListBox.Button as="div" className={ styles.trigger }>
          <Button disabled={ readonly }>
            { value ?? defaultValue }
          </Button>
        </HListBox.Button>
        <HListBox.Options className={ classNames(styles.options, {}, optionsClasses) }>
          { items?.map((item) => (
            <HListBox.Option
              key={ item.value }
              value={ item.value }
              disabled={ item.disabled }
              as={ Fragment }
            >
              {({ active, selected }) => (
                <li
                  className={ classNames(styles.item, {
                    [ styles.active ]: active,
                    [ styles.disabled ]: item.disabled
                  }, []) }
                >
                  { item.content }
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  )
}
