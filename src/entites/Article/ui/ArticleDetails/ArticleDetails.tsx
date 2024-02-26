import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleDetails.module.scss'
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, type TReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticleById } from 'entites/Article/model/services/fetchArticleById';
import { useSelector } from 'react-redux';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from 'entites/Article/model/selectors/articlesDetails';
import { ETextAlign, ETextSize, Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg'
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg'
import { Icon } from 'shared/ui/Icon/Icon';
import { EArticleBlockType, type TArticleBlock } from '../../model/index';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import { HStack, VStack } from 'shared/ui/Stack';

interface IArticleDetails {
  className?: string;
  articleDetailsId?: string;
}

const reducers: TReducersList = {
  articlesDetails: articleDetailsReducer
}

export const ArticleDetails = memo(({ className, articleDetailsId }: IArticleDetails) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: TArticleBlock) => {
    switch (block.type) {
      case EArticleBlockType.CODE:
        return <ArticleCodeBlock key={ block.id } className={ styles.block } block={ block }/>;
      case EArticleBlockType.TEXT:
        return <ArticleTextBlock key={ block.id } className={ styles.block } block={ block }/>;
      case EArticleBlockType.IMAGE:
        return <ArticleImageBlock key={ block.id } className={ styles.block } block={ block }/>
      default: return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(articleDetailsId));
    }
  }, [ dispatch, articleDetailsId ]);

  let content;

  if (isLoading) {
    content = (
      <div>
        <Skeleton className={ styles.avatar } width={ 200 } height={ 200 } border={ '50%' }/>
        <Skeleton className={ styles.title } width={ 300 } height={ 32 } />
        <Skeleton className={ styles.skeleton } width={ 600 } height={ 24 } />
        <Skeleton className={ styles.skeleton } width={ '100%' } height={ 200 } />
        <Skeleton className={ styles.skeleton } width={ '100%' } height={ 200 } />
      </div>)
  } else if (error) {
    content = (
      <Text
        title={ t('Произошла ошибка при загрузке статьи') }
        align={ ETextAlign.CENTER }
      />)
  } else {
    content = (
      <>
        <HStack justify="center" max>
          <Avatar size={ 200 } src={ article?.img } className={ styles.avatar } />
        </HStack>
        <VStack max>
          <Text
            className={ styles.title }
            title={ article?.title }
            text={ article?.subtitle }
            size={ ETextSize.L }
          />
        </VStack>
        <HStack gap="8">
          <Icon Svg={ EyeIcon } className={ styles.icon }/>
          <Text text={ String(article?.views) } />
        </HStack>
        <HStack gap="8">
          <Icon Svg={ CalendarIcon } className={ styles.icon }/>
          <Text text={ article?.createdAt } />
        </HStack>
        { article?.blocks?.map(renderBlock) }
      </>)
  }

  return (
    <DynamicModuleLoader
      name='articlesDetails'
      reducers={ reducers }
      removeAfterUnmount
    >
      <VStack
        gap="16"
        max
        className={ classNames(styles.ArticleDetails, {}, [ className ]) }>
        { content }
      </VStack>
    </DynamicModuleLoader>
  );
});
