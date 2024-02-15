import { classNames } from 'shared/lib/classNames/classNames';
// import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
// import { useParams } from 'react-router-dom';

interface IArticleEditPageProps {
  className?: string;
}

export const ArticleEditPage = memo((props: IArticleEditPageProps) => {
  const { className } = props;
  // const { t } = useTranslation();
  // const { id } = useParams<{ id: string }>();
  // const isEdit = Boolean(id);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Page className={ classNames('', {}, [ className ]) }>
      EDIT
    </Page>
  );
});

export default ArticleEditPage;
