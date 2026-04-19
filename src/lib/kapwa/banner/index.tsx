import React from 'react';
import { cn } from '@kapwa/utils';
import { Button } from '@kapwa/button';

export type BannerType = 'info' | 'warning' | 'error' | 'success' | 'default';

export interface BannerProps {
  title?: string;
  description: string;
  type?: BannerType;
  icon?: boolean;
  cta?:
    | {
        label: string;
        onClick: () => void;
        href?: string;
        variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
        size?: 'sm' | 'md' | 'lg';
      }
    | Array<{
        label: string;
        onClick: () => void;
        href?: string;
        variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
        size?: 'sm' | 'md' | 'lg';
      }>;
  className?: string;
  onDismiss?: () => void;
  titleSize?: 'sm' | 'md' | 'lg';
}

const Banner: React.FC<BannerProps> = ({
  title,
  description,
  type = 'default',
  icon = false,
  cta,
  className,
  onDismiss,
  titleSize = 'lg',
}) => {
  const typeStyles = {
    success: {
      container:
        'border border-[var(--color-kapwa-border-success)] bg-[var(--color-kapwa-bg-success-weak)]',
      icon: 'text-[var(--color-kapwa-text-success)]',
      title: 'text-[var(--color-kapwa-text-success)]',
      description: 'text-[var(--color-kapwa-text-success)]',
      iconSvg: (
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
    },
    error: {
      container:
        'border border-[var(--color-kapwa-border-danger)] bg-[var(--color-kapwa-bg-danger-weak)]',
      icon: 'text-[var(--color-kapwa-text-danger)]',
      title: 'text-[var(--color-kapwa-text-danger)]',
      description: 'text-[var(--color-kapwa-text-danger)]',
      iconSvg: (
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
    },
    warning: {
      container:
        'border border-[var(--color-kapwa-border-warning)] bg-[var(--color-kapwa-bg-warning-weak)]',
      icon: 'text-[var(--color-kapwa-text-warning)]',
      title: 'text-[var(--color-kapwa-text-warning)]',
      description: 'text-[var(--color-kapwa-text-warning)]',
      iconSvg: (
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
    },
    info: {
      container:
        'border border-[var(--color-kapwa-border-info)] bg-[var(--color-kapwa-bg-info-weak)]',
      icon: 'text-[var(--color-kapwa-text-info)]',
      title: 'text-[var(--color-kapwa-text-info)]',
      description: 'text-[var(--color-kapwa-text-info)]',
      iconSvg: (
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
    },
    default: {
      container:
        'border border-[var(--color-kapwa-border-weak)] bg-[var(--color-kapwa-bg-surface-raised)]',
      icon: 'text-[var(--color-kapwa-text-support)]',
      title: 'text-[var(--color-kapwa-text-strong)]',
      description: 'text-[var(--color-kapwa-text-support)]',
      iconSvg: (
        <svg
          className='h-6 w-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
    },
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  const getLinkStyling = (variant: string = 'primary', size: string = 'md') => {
    const variants = {
      primary:
        'bg-[var(--color-kapwa-bg-brand-default)] text-[var(--color-kapwa-text-inverse)] hover:bg-[var(--color-kapwa-bg-brand-hover)] active:bg-[var(--color-kapwa-bg-brand-active)] focus-visible:ring-[var(--color-kapwa-border-focus)]',
      secondary:
        'bg-[var(--color-kapwa-bg-gray-default)] text-[var(--color-kapwa-text-strong)] hover:bg-[var(--color-kapwa-bg-gray-hover)] active:bg-[var(--color-kapwa-bg-gray-active)] focus-visible:ring-[var(--color-kapwa-border-focus)]',
      outline:
        'border border-[var(--color-kapwa-border-strong)] bg-transparent text-[var(--color-kapwa-text-support)] hover:bg-[var(--color-kapwa-bg-gray-default)] active:bg-[var(--color-kapwa-bg-gray-hover)] focus-visible:ring-[var(--color-kapwa-border-focus)]',
      ghost:
        'bg-transparent text-[var(--color-kapwa-text-support)] hover:bg-[var(--color-kapwa-bg-gray-default)] active:bg-[var(--color-kapwa-bg-gray-hover)] focus-visible:ring-[var(--color-kapwa-border-focus)]',
      link: 'h-auto bg-transparent p-0 text-[var(--color-kapwa-text-link)] hover:text-[var(--color-kapwa-text-link-hover)] hover:underline focus-visible:ring-0 shadow-none',
    };

    const sizes = {
      sm: 'h-8 px-3 py-1.5 text-sm',
      md: 'h-10 px-4 py-2 text-base',
      lg: 'h-12 px-6 py-3 text-lg',
    };

    return cn(
      'inline-flex items-center justify-center rounded-md font-medium transition-colors',
      'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2',
      variants[variant as keyof typeof variants],
      sizes[size as keyof typeof sizes],
      variant !== 'link' && 'shadow-xs'
    );
  };

  const currentStyles = typeStyles[type];

  // Helper function to render a single CTA button
  const renderCTAButton = (
    ctaItem: {
      label: string;
      onClick: () => void;
      href?: string;
      variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
      size?: 'sm' | 'md' | 'lg';
    },
    index: number
  ) => {
    if (ctaItem.href) {
      return (
        <a
          key={index}
          href={ctaItem.href}
          className={getLinkStyling(ctaItem.variant, ctaItem.size)}
        >
          {ctaItem.label}
        </a>
      );
    }

    return (
      <Button
        key={index}
        onClick={ctaItem.onClick}
        variant={ctaItem.variant || 'primary'}
        size={ctaItem.size || 'md'}
      >
        {ctaItem.label}
      </Button>
    );
  };

  // CTA button (for banner with button layout)
  if (cta) {
    const ctaArray = Array.isArray(cta) ? cta : [cta];

    return (
      <div
        className={cn(
          'relative rounded-lg p-4',
          currentStyles.container,
          className
        )}
      >
        <div className='md:flex items-center'>
          <div
            className={cn(
              'mb-6 md:mb-0 md:w-2/3 md:pr-8',
              onDismiss ? 'pr-10 md:pr-8' : ''
            )}
          >
            {title && (
              <h3
                className={cn(
                  'font-semibold mb-2',
                  currentStyles.title,
                  titleSizes[titleSize]
                )}
              >
                {title}
              </h3>
            )}
            <p className={currentStyles.description}>{description}</p>
          </div>
          <div className='md:w-1/3 flex justify-center md:justify-end'>
            <div className='flex space-x-2 items-center'>
              {ctaArray.map((ctaItem, index) =>
                renderCTAButton(ctaItem, index)
              )}
              {onDismiss && (
                <button
                  onClick={onDismiss}
                  className='absolute top-2 right-2 md:relative md:top-auto md:right-auto rounded-md p-2 transition-colors hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-offset-2'
                  aria-label='Dismiss banner'
                >
                  <svg
                    className='w-4 h-4 opacity-60'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard banner layout (with or without icon)
  return (
    <div
      className={cn(
        'relative flex justify-between rounded-lg p-4',
        currentStyles.container,
        className
      )}
    >
      {onDismiss && (
        <button
          onClick={onDismiss}
          className='absolute top-2 right-2 md:relative md:top-auto md:right-auto md:flex md:items-center md:justify-end md:ml-3 flex-shrink-0 rounded-md p-2 transition-colors hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-offset-2'
          aria-label='Dismiss banner'
        >
          <svg
            className='w-4 h-4 opacity-60'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      )}
      <div
        className={cn(
          'flex items-center',
          title ? 'items-start' : 'items-center',
          onDismiss ? 'pr-10 md:pr-0' : ''
        )}
      >
        {icon && (
          <div className={cn('mr-3', title ? 'mt-1' : '', currentStyles.icon)}>
            {currentStyles.iconSvg}
          </div>
        )}

        <div className='flex-1'>
          {title && (
            <h3
              className={cn(
                'font-semibold',
                currentStyles.title,
                titleSizes[titleSize]
              )}
            >
              {title}
            </h3>
          )}
          <p className={cn(currentStyles.description, 'text-sm')}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export { Banner };
