import { Button } from '@kapwa/button';
import { Card, CardHeader, CardContent } from '@kapwa/card';
import { ExternalLink } from 'lucide-react';

type ListSectionItem = {
  id: number;
  title: string;
  category: string;
};

type ListsSectionProps = {
  title: string;
  headerTitle: string;
  headerSubtitle?: string;
  externalLinkText?: string;
  listItems: ListSectionItem[];
};

const List = ({
  headerTitle,
  headerSubtitle,
  externalLinkText,
  listItems,
  title,
}: {
  title: string;
  headerTitle: string;
  headerSubtitle?: string;
  externalLinkText?: string;
  listItems: ListSectionItem[];
}) => {
  return (
    <Card>
      <CardHeader>
        <h2 className='text-2xl font-semibold'>{headerTitle}</h2>
        {headerSubtitle && (
          <p className='text-[var(--color-kapwa-text-support)]'>
            {headerSubtitle}
          </p>
        )}
      </CardHeader>
      <CardContent>
        <div className='space-y-8'>
          <div>
            <h3 className='font-medium mb-4'>{title}</h3>
            <div className='space-y-4'>
              {listItems.map(item => (
                <div
                  key={item.id}
                  className='rounded-lg border border-[var(--color-kapwa-border-weak)] bg-[var(--color-kapwa-bg-surface)] p-4 transition-colors hover:border-[var(--color-kapwa-border-brand)]'
                >
                  <div className='flex items-start justify-between'>
                    <div>
                      <h4 className='text-lg font-medium text-[var(--color-kapwa-text-strong)]'>
                        {item.title}
                      </h4>
                      <span className='mt-2 inline-block rounded-sm bg-[var(--color-kapwa-bg-gray-default)] px-2 py-1 text-xs font-medium text-[var(--color-kapwa-text-support)]'>
                        {item.category}
                      </span>
                    </div>
                    {externalLinkText && (
                      <Button variant='ghost' size='sm'>
                        {externalLinkText}
                        <ExternalLink className='ml-2 h-4 w-4' />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { List };
export type { ListsSectionProps, ListSectionItem };
