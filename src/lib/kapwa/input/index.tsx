import * as React from 'react';

import { cn } from '@kapwa/utils';

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border border-[var(--color-kapwa-border-strong)] bg-[var(--color-kapwa-bg-surface)] px-3 py-1 text-base text-[var(--color-kapwa-text-strong)] shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[var(--color-kapwa-text-strong)] placeholder:text-[var(--color-kapwa-text-disabled)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-kapwa-border-focus)] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
