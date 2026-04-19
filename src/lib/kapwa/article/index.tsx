import { Card, CardImage, CardContent } from '@kapwa/card';
import { Button } from '@kapwa/button';

type ArticleCardItem = {
  id: number;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  hasOverlay?: boolean;
};

type ArticleContentSection = {
  id: number;
  type: 'heading' | 'paragraph';
  level?: 1 | 2 | 3;
  content: string;
};

const ArticleCard = ({ article }: { article: ArticleCardItem }) => {
  return (
    <Card>
      {article.hasOverlay ? (
        <div className='relative'>
          <CardImage src={article.image} alt={article.imageAlt} />
          <div className='absolute inset-0 bg-linear-to-t from-black/75 to-transparent flex items-end p-6'>
            <div className='text-white'>
              <span className='inline-block px-2 py-1 text-xs font-medium rounded-sm bg-white/20 mb-2'>
                {article.category}
              </span>
              <h3 className='text-xl font-semibold mb-2'>{article.title}</h3>
              <p className='text-white/80'>{article.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <CardImage src={article.image} alt={article.imageAlt} />
          <CardContent>
            <span className='mb-2 inline-block rounded-sm bg-[var(--color-kapwa-bg-brand-weak)] px-2 py-1 text-xs font-medium text-[var(--color-kapwa-text-brand)]'>
              {article.category}
            </span>
            <h3 className='text-xl font-semibold mb-2'>{article.title}</h3>
            <p className='mb-4 text-[var(--color-kapwa-text-support)]'>
              {article.description}
            </p>
            <Button variant='link'>Read More</Button>
          </CardContent>
        </>
      )}
    </Card>
  );
};

const ArticleContent = ({
  articleContentTitle,
  articleContent,
}: {
  articleContentTitle: string;
  articleContent: ArticleContentSection[];
}) => {
  return (
    <div>
      <h3 className='font-medium mb-4'>{articleContentTitle}</h3>
      <div className='prose max-w-none'>
        {articleContent.map(section => {
          if (section.type === 'heading') {
            const HeadingTag =
              `h${section.level}` as keyof JSX.IntrinsicElements;
            const headingClass =
              section.level === 1
                ? 'text-3xl font-bold mb-4'
                : section.level === 2
                  ? 'text-2xl font-semibold mb-3'
                  : 'text-xl font-semibold mb-2';
            return (
              <HeadingTag key={section.id} className={headingClass}>
                {section.content}
              </HeadingTag>
            );
          }
          return (
            <p
              key={section.id}
              className='mb-4 text-[var(--color-kapwa-text-support)]'
            >
              {section.content}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export { ArticleCard, ArticleContent };
export type { ArticleCardItem, ArticleContentSection };
