import { Card, CardContent, CardHeader } from '@kapwa/card';
import { Button } from '@kapwa/button';

type TableDataItem = {
  id: number;
  name: string;
  email: string;
  status: 'Active' | 'Pending' | 'Inactive';
};

const Table = ({
  title,
  subtitle,
  tableData,
}: {
  title: string;
  subtitle: string;
  tableData: TableDataItem[];
}) => {
  const statusStyles = {
    Active:
      'bg-[var(--color-kapwa-bg-success-weak)] text-[var(--color-kapwa-text-success)]',
    Pending:
      'bg-[var(--color-kapwa-bg-warning-weak)] text-[var(--color-kapwa-text-warning)]',
    Inactive:
      'bg-[var(--color-kapwa-bg-danger-weak)] text-[var(--color-kapwa-text-danger)]',
  } as const;

  return (
    <Card className='mb-8'>
      <CardHeader>
        <h2 className='text-2xl font-semibold'>{title}</h2>
        <p className='text-[var(--color-kapwa-text-support)]'>{subtitle}</p>
      </CardHeader>
      <CardContent>
        <div className='overflow-x-auto space-y-8'>
          <table className='min-w-full divide-y divide-[var(--color-kapwa-border-weak)]'>
            <thead className='bg-[var(--color-kapwa-bg-surface-raised)]'>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--color-kapwa-text-support)]'>
                  Name
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--color-kapwa-text-support)]'>
                  Email
                </th>
                <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--color-kapwa-text-support)]'>
                  Status
                </th>
                <th className='px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-[var(--color-kapwa-text-support)]'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-[var(--color-kapwa-border-weak)] bg-[var(--color-kapwa-bg-surface)]'>
              {tableData.map(row => (
                <tr
                  key={row.id}
                  className='hover:bg-[var(--color-kapwa-bg-surface-raised)]'
                >
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm font-medium text-[var(--color-kapwa-text-strong)]'>
                      {row.name}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-[var(--color-kapwa-text-support)]'>
                      {row.email}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${statusStyles[row.status]}`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                    <Button variant='ghost' size='sm'>
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export { Table };
export type { TableDataItem };
