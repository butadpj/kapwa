import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from '@kapwa/banner';
import { Button } from '@kapwa/button';
import { Card, CardContent, CardFooter, CardHeader } from '@kapwa/card';

const openStory = (path: string) => {
  window.location.href = path;
};

const Introduction = () => (
  <div className='kapwa-sans mx-auto max-w-6xl space-y-10 text-[var(--color-kapwa-text-strong)]'>
    <section className='rounded-lg border border-[var(--color-kapwa-border-brand)] bg-[var(--color-kapwa-bg-surface-brand)] p-6 shadow-md md:p-12'>
      <p className='kapwa-label-sm mb-4 text-[var(--color-kapwa-text-brand)]'>
        BetterGov Design System
      </p>
      <div className='grid gap-8 lg:grid-cols-[1.5fr_1fr]'>
        <div>
          <h1 className='kapwa-heading-xl mb-4 text-[var(--color-kapwa-text-brand-bold)]'>
            Welcome to Kapwa
          </h1>
          <p className='kapwa-body-lg-default max-w-3xl text-[var(--color-kapwa-text-support)]'>
            Kapwa is BetterGov&apos;s design system for civic websites. It
            brings reusable components, design tokens, and accessibility-minded
            patterns into one shared reference for teams building public digital
            services.
          </p>
          <div className='mt-8 flex flex-wrap gap-3'>
            <Button
              size='lg'
              onClick={() =>
                openStory('?path=/story/foundations-tokens--overview')
              }
            >
              View tokens
            </Button>
            <Button
              variant='secondary'
              size='lg'
              onClick={() => openStory('?path=/docs/components-button--docs')}
            >
              Browse components
            </Button>
          </div>
        </div>
        <Card className='border-[var(--color-kapwa-border-brand)] bg-[var(--color-kapwa-bg-surface)]'>
          <CardHeader>
            <h2 className='kapwa-heading-sm text-[var(--color-kapwa-text-strong)]'>
              Start here
            </h2>
          </CardHeader>
          <CardContent className='space-y-4'>
            <p className='kapwa-body-md-default text-[var(--color-kapwa-text-support)]'>
              Use this Storybook to inspect component states, compare variants,
              and see how Kapwa tokens appear in real UI.
            </p>
            <Banner
              type='info'
              title='Best first stop'
              description='Open Foundations / Tokens before reviewing component stories.'
              icon
              titleSize='sm'
            />
          </CardContent>
        </Card>
      </div>
    </section>

    <section className='space-y-4'>
      <div>
        <h2 className='kapwa-heading-lg text-[var(--color-kapwa-text-strong)]'>
          Who uses this Storybook
        </h2>
        <p className='kapwa-body-md-default mt-2 max-w-3xl text-[var(--color-kapwa-text-support)]'>
          The same Kapwa components below are used to explain how different
          teams should read the system.
        </p>
      </div>

      <div className='grid gap-4 md:grid-cols-3'>
        <Card hoverable>
          <CardHeader className='bg-[var(--color-kapwa-bg-accent-blue-weak)]'>
            <h3 className='kapwa-heading-sm text-[var(--color-kapwa-text-accent-blue)]'>
              Designers
            </h3>
          </CardHeader>
          <CardContent>
            <p className='kapwa-body-md-default text-[var(--color-kapwa-text-support)]'>
              Review visual states, spacing, typography, and token behavior
              before handoff or approval.
            </p>
          </CardContent>
        </Card>

        <Card hoverable>
          <CardHeader className='bg-[var(--color-kapwa-bg-accent-green-weak)]'>
            <h3 className='kapwa-heading-sm text-[var(--color-kapwa-text-accent-green)]'>
              Developers
            </h3>
          </CardHeader>
          <CardContent>
            <p className='kapwa-body-md-default text-[var(--color-kapwa-text-support)]'>
              Confirm props, edge cases, accessibility states, and expected
              styling before using or changing a component.
            </p>
          </CardContent>
        </Card>

        <Card hoverable>
          <CardHeader className='bg-[var(--color-kapwa-bg-accent-yellow-weak)]'>
            <h3 className='kapwa-heading-sm text-[var(--color-kapwa-text-warning)]'>
              Product teams
            </h3>
          </CardHeader>
          <CardContent>
            <p className='kapwa-body-md-default text-[var(--color-kapwa-text-support)]'>
              Find available building blocks and understand what Kapwa provides
              before creating new patterns.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>

    <section className='grid gap-4 lg:grid-cols-2'>
      <Card>
        <CardHeader>
          <h2 className='kapwa-heading-sm text-[var(--color-kapwa-text-strong)]'>
            How to read this Storybook
          </h2>
        </CardHeader>
        <CardContent>
          <ul className='kapwa-body-md-default list-disc space-y-3 pl-5 text-[var(--color-kapwa-text-support)]'>
            <li>Start with Foundations / Tokens.</li>
            <li>Use component sections to inspect variants and states.</li>
            <li>Check focus, disabled, loading, empty, and error states.</li>
            <li>
              Pair stories with the public docs for contribution guidance.
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            variant='outline'
            onClick={() =>
              openStory('?path=/story/foundations-tokens--overview')
            }
          >
            Open Foundations / Tokens
          </Button>
        </CardFooter>
      </Card>

      <Banner
        type='success'
        title='Public documentation'
        description='The docs site explains installation, architecture, contribution workflow, and the principles behind Kapwa.'
        icon
        cta={{
          label: 'Open Kapwa Docs',
          href: '/guides/',
          onClick: () => undefined,
          variant: 'primary',
        }}
      />
    </section>
  </div>
);

const meta: Meta<typeof Introduction> = {
  title: 'Introduction',
  component: Introduction,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A starting point for designers, developers, and product teams using Kapwa Storybook.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Introduction>;

export const Overview: Story = {};
