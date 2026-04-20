import type { Meta, StoryObj } from '@storybook/react';

const colorTokens = [
  '--color-kapwa-brand-600',
  '--color-kapwa-text-strong',
  '--color-kapwa-text-support',
  '--color-kapwa-bg-surface',
  '--color-kapwa-bg-brand-default',
  '--color-kapwa-border-focus',
];

const spacingTokens = [
  '--spacing-kapwa-xs',
  '--spacing-kapwa-sm',
  '--spacing-kapwa-md',
  '--spacing-kapwa-lg',
  '--spacing-kapwa-xl',
];

const typographyUtilities = [
  'kapwa-heading-lg',
  'kapwa-heading-md',
  'kapwa-body-md-default',
  'kapwa-body-md-strong',
  'kapwa-label-md',
];

const getTokenValue = (token: string) => {
  if (typeof window === 'undefined') return token;
  return getComputedStyle(document.documentElement)
    .getPropertyValue(token)
    .trim();
};

const TokenReference = () => {
  return (
    <div className='w-full max-w-4xl space-y-10 text-[var(--color-kapwa-text-strong)]'>
      <section>
        <h2 className='kapwa-heading-lg mb-3'>Design tokens</h2>
        <p className='kapwa-body-md-default max-w-2xl text-[var(--color-kapwa-text-support)]'>
          Tokens are the named design decisions shared by designers and
          developers. Use semantic tokens for component intent, and use
          primitive tokens when documenting the raw palette or scale.
        </p>
      </section>

      <section>
        <h3 className='kapwa-heading-sm mb-4'>Core color tokens</h3>
        <div className='grid gap-3 sm:grid-cols-2'>
          {colorTokens.map(token => (
            <div
              key={token}
              className='flex items-center gap-3 rounded-md border border-[var(--color-kapwa-border-weak)] p-3'
            >
              <span
                className='h-10 w-10 shrink-0 rounded-md border border-[var(--color-kapwa-border-weak)]'
                style={{ backgroundColor: `var(${token})` }}
              />
              <span className='min-w-0'>
                <code className='block text-sm'>{token}</code>
                <span className='kapwa-body-xs-default text-[var(--color-kapwa-text-support)]'>
                  {getTokenValue(token)}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className='kapwa-heading-sm mb-4'>Spacing tokens</h3>
        <div className='space-y-3'>
          {spacingTokens.map(token => (
            <div key={token} className='grid gap-3 sm:grid-cols-[12rem_1fr]'>
              <code className='text-sm'>{token}</code>
              <div className='flex items-center gap-3'>
                <span
                  className='block h-4 rounded-sm bg-[var(--color-kapwa-bg-brand-default)]'
                  style={{ width: `var(${token})` }}
                />
                <span className='kapwa-body-xs-default text-[var(--color-kapwa-text-support)]'>
                  {getTokenValue(token)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className='kapwa-heading-sm mb-4'>Typography utilities</h3>
        <div className='space-y-3'>
          {typographyUtilities.map(utility => (
            <div key={utility} className={utility}>
              <code>{utility}</code> The quick brown fox jumps over the lazy
              dog.
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const meta: Meta<typeof TokenReference> = {
  title: 'Foundations/Tokens',
  component: TokenReference,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A visual reference for the Kapwa tokens and utilities most teams use when designing and building components.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TokenReference>;

export const Overview: Story = {};
