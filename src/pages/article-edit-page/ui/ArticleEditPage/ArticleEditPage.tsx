import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from '@/widgets/Page';

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
