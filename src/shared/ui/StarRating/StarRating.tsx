import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './StarRating.module.scss'
import { memo, useState } from 'react';
import { Icon } from '@/shared/ui/Icon/Icon';
import StarIcon from '@/shared/assets/icons/star.svg'

interface IStarRatingProps {
  className?: string;
  onSelect?: (starCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [ 1, 2, 3, 4, 5 ]

export const StarRating = memo((props: IStarRatingProps) => {
  const { className, size = 30, selectedStars = 0, onSelect } = props;
  const [ isSelected, setIsSelected ] = useState(Boolean(selectedStars));
  const [ currentStarCount, setCurrentStarCount ] = useState(selectedStars);

  const onHover = (starCount: number) => () => {
    if (!isSelected) {
      setCurrentStarCount(starCount)
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarCount(0)
    }
  };

  const onClick = (starCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starCount);
      setCurrentStarCount(starCount);
      setIsSelected(true);
    }
  }

  return (
    <div className={ classNames(styles.StarRating, {}, [ className ]) }>
      { stars.map((starNumber) => (
        <Icon
          className={ classNames(
            styles.starIcon,
            { [ styles.selected ]: isSelected },
            [ currentStarCount >= starNumber ? styles.hovered : styles.normal ])
          }
          width={ size }
          height={ size }
          Svg={ StarIcon }
          key={ starNumber }
          onMouseLeave={ onLeave }
          onMouseEnter={ onHover(starNumber) }
          onClick={ onClick(starNumber) }
        />
      ))}
    </div>
  );
});
