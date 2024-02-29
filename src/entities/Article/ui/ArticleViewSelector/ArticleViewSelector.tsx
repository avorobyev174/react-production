import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './ArticleViewSelector.module.scss'
import { memo } from 'react';
import { EArticleView } from '../../../Article/model/const/const';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { Button, EButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';

interface IArticleViewSelectorProps {
  className?: string;
  view?: EArticleView;
  onViewClick?: (view: EArticleView) => void;
}

const viewTypes = [
  { view: EArticleView.BIG, icon: ListIcon },
  { view: EArticleView.SMALL, icon: TiledIcon },
]

export const ArticleViewSelector = memo((props: IArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: EArticleView) => () => {
    onViewClick?.(newView);
  }

  return (
    <div className={ classNames(styles.ArticleViewSelector, {}, [ className ]) }>
      { viewTypes.map((viewType) => (
        <Button
          key={ viewType.view }
          onClick={ onClick(viewType.view) }
          theme={ EButtonTheme.CLEAR }
        >
          <Icon
            className={ classNames('', { [ styles.notSelected ]: viewType.view !== view }, []) }
            Svg={ viewType.icon }
          />
        </Button>
      ))}
    </div>
  );
});
