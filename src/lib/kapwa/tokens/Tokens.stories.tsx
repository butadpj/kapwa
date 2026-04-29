import type { CSSProperties, ReactNode } from 'react';
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
    <div className='w-full max-w-4xl py-14 px-12  text-(--color-kapwa-text-strong)'>
      <section>
        <h2 className='kapwa-heading-lg mb-3'>Design tokens</h2>
        <p className='kapwa-body-md-default max-w-2xl text-(--color-kapwa-text-support)'>
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

type VisualTokenProposal = {
  id: string;
  name: string;
  badge?: string;
  intent: string;
  bestFor: string;
  strengths: string;
  risks: string;
  feedbackPrompt: string;
  typography: {
    display: string;
    body: string;
    mono: string;
    note: string;
  };
  colors: {
    surface: string;
    surfaceRaised: string;
    textStrong: string;
    textSupport: string;
    primary: string;
    primaryHover: string;
    primaryWeak: string;
    focus: string;
    borderWeak: string;
    borderStrong: string;
    success: string;
    warning: string;
    danger: string;
    info: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
  };
  shadow: {
    low: string;
    medium: string;
  };
};

const visualTokenProposals: VisualTokenProposal[] = [
  {
    id: 'calm-civic-default',
    name: 'Calm Civic Default',
    intent:
      'Neutral-first civic UI with restrained Philippine blue, deep readable text, and gold reserved for focus and small emphasis.',
    bestFor: 'Core services, forms, directories, dashboards, official guidance',
    strengths:
      'Broadest fit, least distracting, easiest to scale across BetterGov and non-BetterGov projects.',
    risks:
      'May feel too quiet for campaigns, launches, or highly public-facing advocacy pages.',
    feedbackPrompt:
      'Does this feel trustworthy enough to become the default Kapwa baseline?',
    typography: {
      display:
        '"Atkinson Hyperlegible Next", "Atkinson Hyperlegible", Verdana, system-ui, sans-serif',
      body: '"Atkinson Hyperlegible", Verdana, system-ui, -apple-system, sans-serif',
      mono: '"Roboto Mono", "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace',
      note: 'High-legibility service typography for forms, instructions, and long civic content.',
    },
    colors: {
      surface: '#f8fafc',
      surfaceRaised: '#ffffff',
      textStrong: '#172033',
      textSupport: '#4a5568',
      primary: '#155e75',
      primaryHover: '#0f4c5c',
      primaryWeak: '#e6f4f8',
      focus: '#f4c430',
      borderWeak: '#d8e0e8',
      borderStrong: '#7b8794',
      success: '#16794c',
      warning: '#a85f00',
      danger: '#b42318',
      info: '#1f5fbf',
    },
    radius: {
      sm: '4px',
      md: '6px',
      lg: '8px',
    },
    shadow: {
      low: '0 1px 2px rgb(15 23 42 / 0.08)',
      medium: '0 10px 24px rgb(15 23 42 / 0.12)',
    },
  },
  {
    id: 'warm-public-service',
    name: 'Warm Public Service',
    intent:
      'Softer public-service surfaces with blue-teal actions, muted gold, and warmer off-white backgrounds.',
    bestFor:
      'Health, social services, education, community support, volunteer programs',
    strengths:
      'More approachable for help-oriented services while staying restrained and legible.',
    risks:
      'Less immediately government-coded, and warm surfaces need careful contrast checks.',
    feedbackPrompt:
      'Does the warmth make services feel more humane without weakening authority?',
    typography: {
      display:
        '"Source Sans 3", "Source Sans Pro", "Avenir Next", system-ui, sans-serif',
      body: '"Source Sans 3", "Source Sans Pro", "Avenir Next", system-ui, sans-serif',
      mono: '"IBM Plex Mono", "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace',
      note: 'Humanist sans treatment for help-oriented services that need warmth without softness becoming casual.',
    },
    colors: {
      surface: '#fbf7f0',
      surfaceRaised: '#fffdf8',
      textStrong: '#1f2933',
      textSupport: '#52606d',
      primary: '#0f766e',
      primaryHover: '#115e59',
      primaryWeak: '#e6f6f4',
      focus: '#e9b949',
      borderWeak: '#e4d8c8',
      borderStrong: '#9a8f80',
      success: '#2f855a',
      warning: '#b7791f',
      danger: '#b91c1c',
      info: '#2563eb',
    },
    radius: {
      sm: '5px',
      md: '7px',
      lg: '8px',
    },
    shadow: {
      low: '0 1px 2px rgb(92 64 28 / 0.08)',
      medium: '0 10px 24px rgb(92 64 28 / 0.12)',
    },
  },
  {
    id: 'clear-national-signal',
    name: 'Clear National Signal',
    intent:
      'Recognizably official Philippine cues through deep blue hierarchy, controlled gold, and red only for critical states.',
    bestFor:
      'National portals, high-visibility announcements, official program landing pages',
    strengths:
      'Most immediately recognizable as official and strongest for high-visibility civic communication.',
    risks:
      'Easiest to overuse; can become campaign-like if red, gold, or heavy headers dominate.',
    feedbackPrompt:
      'Does this feel official and clear, or does it become too loud for daily services?',
    typography: {
      display:
        '"Libre Franklin", "Noto Sans", system-ui, -apple-system, sans-serif',
      body: '"Libre Franklin", "Noto Sans", system-ui, -apple-system, sans-serif',
      mono: '"IBM Plex Mono", "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace',
      note: 'Formal official hierarchy for high-visibility announcements without compressed headings.',
    },
    colors: {
      surface: '#eef3fb',
      surfaceRaised: '#ffffff',
      textStrong: '#101828',
      textSupport: '#475467',
      primary: '#0038a8',
      primaryHover: '#001f5c',
      primaryWeak: '#dbe8ff',
      focus: '#fcd116',
      borderWeak: '#b9c6da',
      borderStrong: '#0038a8',
      success: '#087443',
      warning: '#9f580a',
      danger: '#ce1126',
      info: '#004fd6',
    },
    radius: {
      sm: '4px',
      md: '6px',
      lg: '8px',
    },
    shadow: {
      low: '0 1px 2px rgb(17 24 39 / 0.08)',
      medium: '0 10px 24px rgb(17 24 39 / 0.14)',
    },
  },
  {
    id: 'civic-signal-default',
    name: 'Civic Signal Default',
    badge: 'Design engineer recommendation',
    intent:
      'A service-first foundation with a stronger official blue signal, restrained gold focus, and national cues held to deliberate UI moments.',
    bestFor:
      'Kapwa default adoption, LGU services, national agency services, transparency tools',
    strengths:
      'Keeps the credibility of Clear National Signal without letting flag colors dominate routine tasks.',
    risks:
      'Needs clear governance so teams do not over-apply red, gold, or heavy official treatments.',
    feedbackPrompt:
      'Does this feel official enough for government adoption while still calm enough for daily service use?',
    typography: {
      display:
        '"Public Sans", "Noto Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      body: '"Public Sans", "Noto Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      mono: '"Roboto Mono", "SFMono-Regular", ui-monospace, Menlo, Consolas, monospace',
      note: 'Civic default stack: direct, contemporary, and credible for both LGU and national agency services.',
    },
    colors: {
      surface: '#f6f8fb',
      surfaceRaised: '#ffffff',
      textStrong: '#141b2d',
      textSupport: '#526173',
      primary: '#145a8d',
      primaryHover: '#0d4168',
      primaryWeak: '#e8f3fb',
      focus: '#f4c430',
      borderWeak: '#d9e2ec',
      borderStrong: '#728197',
      success: '#147a45',
      warning: '#a65f00',
      danger: '#b4233a',
      info: '#2563b8',
    },
    radius: {
      sm: '4px',
      md: '6px',
      lg: '8px',
    },
    shadow: {
      low: '0 1px 2px rgb(20 27 45 / 0.08)',
      medium: '0 10px 24px rgb(20 27 45 / 0.13)',
    },
  },
];

const getProposalStyle = (proposal: VisualTokenProposal) =>
  ({
    '--proposal-surface': proposal.colors.surface,
    '--proposal-surface-raised': proposal.colors.surfaceRaised,
    '--proposal-text-strong': proposal.colors.textStrong,
    '--proposal-text-support': proposal.colors.textSupport,
    '--proposal-primary': proposal.colors.primary,
    '--proposal-primary-hover': proposal.colors.primaryHover,
    '--proposal-primary-weak': proposal.colors.primaryWeak,
    '--proposal-focus': proposal.colors.focus,
    '--proposal-border-weak': proposal.colors.borderWeak,
    '--proposal-border-strong': proposal.colors.borderStrong,
    '--proposal-success': proposal.colors.success,
    '--proposal-warning': proposal.colors.warning,
    '--proposal-danger': proposal.colors.danger,
    '--proposal-info': proposal.colors.info,
    '--proposal-radius-sm': proposal.radius.sm,
    '--proposal-radius-md': proposal.radius.md,
    '--proposal-radius-lg': proposal.radius.lg,
    '--proposal-shadow-low': proposal.shadow.low,
    '--proposal-shadow-medium': proposal.shadow.medium,
    '--proposal-font-display': proposal.typography.display,
    '--proposal-font-body': proposal.typography.body,
    '--proposal-font-mono': proposal.typography.mono,
    fontFamily: 'var(--proposal-font-body)',
  }) as CSSProperties;

const paletteRoles = [
  ['surface', 'Canvas'],
  ['surfaceRaised', 'Raised'],
  ['textStrong', 'Text'],
  ['textSupport', 'Support'],
  ['primaryWeak', 'Weak'],
  ['primary', 'Primary'],
  ['primaryHover', 'Hover'],
  ['focus', 'Focus'],
  ['borderWeak', 'Line'],
  ['borderStrong', 'Rule'],
  ['info', 'Info'],
  ['success', 'Success'],
  ['warning', 'Warning'],
  ['danger', 'Danger'],
] as const;

const statusSamples = [
  ['info', 'Info', 'New filing guidance is available for review.'],
  ['success', 'Success', 'Your request was received by the service desk.'],
  ['warning', 'Warning', 'Some records need manual verification.'],
  ['danger', 'Danger', 'This deadline has passed and needs urgent action.'],
] as const;

const fontImportCss = `
  @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=IBM+Plex+Mono:wght@400;600&family=Libre+Franklin:wght@400;600;700;800&family=Public+Sans:wght@400;600;700;800&family=Roboto+Mono:wght@400;600&family=Source+Sans+3:wght@400;600;700;800&display=swap');
`;

const FontImports = () => <style>{fontImportCss}</style>;

const comparisonColorRoles = [
  ['surface', 'Canvas'],
  ['surfaceRaised', 'Raised'],
  ['textStrong', 'Text'],
  ['textSupport', 'Support'],
  ['primaryWeak', 'Weak'],
  ['primary', 'Primary'],
  ['primaryHover', 'Hover'],
  ['focus', 'Focus'],
  ['borderWeak', 'Line'],
  ['borderStrong', 'Rule'],
  ['info', 'Info'],
  ['success', 'Success'],
  ['warning', 'Warning'],
  ['danger', 'Danger'],
] as const;

const semanticUsageSamples = [
  ['info', 'Info', 'Updated office hours are now published.'],
  ['success', 'Success', 'Application received and queued for review.'],
  ['warning', 'Warning', 'Bring the original copy for verification.'],
  ['danger', 'Danger', 'Payment deadline passed. Action is required.'],
] as const;

const systemTokenRows = [
  ['Radius', 'sm / md / lg'],
  ['Shadow', 'low / medium'],
  ['Focus', 'ring token'],
] as const;

const ProposalButton = ({
  children,
  variant = 'primary',
}: {
  children: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'ghost'
    | 'danger'
    | 'disabled';
}) => {
  const className =
    'inline-flex min-h-10 items-center justify-center rounded-[var(--proposal-radius-md)] px-4 text-sm font-semibold transition-[background-color,border-color,box-shadow,color,opacity,transform] duration-150 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[var(--proposal-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--proposal-surface)] disabled:transform-none';

  if (variant === 'primary') {
    return (
      <button
        className={`${className} bg-[var(--proposal-primary)] text-white hover:bg-[var(--proposal-primary-hover)]`}
        type='button'
      >
        {children}
      </button>
    );
  }

  if (variant === 'secondary') {
    return (
      <button
        className={`${className} bg-[var(--proposal-primary-weak)] text-[var(--proposal-primary)]`}
        type='button'
      >
        {children}
      </button>
    );
  }

  if (variant === 'outline') {
    return (
      <button
        className={`${className} border border-[var(--proposal-border-strong)] bg-[var(--proposal-surface-raised)] text-[var(--proposal-text-strong)]`}
        type='button'
      >
        {children}
      </button>
    );
  }

  if (variant === 'ghost') {
    return (
      <button
        className={`${className} text-[var(--proposal-primary)]`}
        type='button'
      >
        {children}
      </button>
    );
  }

  if (variant === 'danger') {
    return (
      <button
        className={`${className} bg-[var(--proposal-danger)] text-white`}
        type='button'
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`${className} cursor-not-allowed bg-[var(--proposal-border-weak)] text-[var(--proposal-text-support)] opacity-80`}
      disabled
      type='button'
    >
      {children}
    </button>
  );
};

const ProposalSection = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className='border-t border-[var(--proposal-border-weak)] pt-5'>
    <h4 className='mb-3 text-sm font-bold text-[var(--proposal-text-strong)]'>
      {title}
    </h4>
    {children}
  </section>
);

const PaletteStrip = ({ proposal }: { proposal: VisualTokenProposal }) => (
  <div className='grid grid-cols-2 gap-2 sm:grid-cols-4'>
    {paletteRoles.map(([role, label]) => (
      <div key={role}>
        <div
          className='h-12 rounded-[var(--proposal-radius-sm)] border border-[var(--proposal-border-weak)]'
          style={{ backgroundColor: proposal.colors[role] }}
        />
        <div className='mt-1 text-xs font-medium text-[var(--proposal-text-strong)]'>
          {label}
        </div>
        <code className='block text-[11px] text-[var(--proposal-text-support)]'>
          {proposal.colors[role]}
        </code>
      </div>
    ))}
  </div>
);

const TailwindStyleColorStrip = ({
  proposal,
}: {
  proposal: VisualTokenProposal;
}) => (
  <div className='grid grid-cols-2 overflow-hidden rounded-[var(--proposal-radius-md)] border border-[var(--proposal-border-weak)] sm:grid-cols-7'>
    {comparisonColorRoles.map(([role, label]) => (
      <div key={role} className='min-w-0 bg-[var(--proposal-surface-raised)]'>
        <div
          className='h-14 border-b border-white/40'
          style={{ backgroundColor: proposal.colors[role] }}
        />
        <div className='px-2 py-2'>
          <div className='truncate text-[11px] font-bold text-[var(--proposal-text-strong)]'>
            {label}
          </div>
          <code className='block truncate text-[10px] text-[var(--proposal-text-support)]'>
            {proposal.colors[role]}
          </code>
        </div>
      </div>
    ))}
  </div>
);

const PaletteUsageSpecimen = () => (
  <div className='grid gap-3'>
    <div className='grid gap-3 md:grid-cols-[0.9fr_1.1fr]'>
      <div className='rounded-[var(--proposal-radius-md)] border border-[var(--proposal-border-weak)] bg-[var(--proposal-surface-raised)] p-3'>
        <p className='text-xs font-bold text-[var(--proposal-text-strong)]'>
          Text and borders
        </p>
        <p className='mt-1 text-sm leading-5 text-[var(--proposal-text-support)]'>
          Strong text carries task labels. Support text carries metadata, helper
          copy, and secondary instructions.
        </p>
        <div className='mt-3 grid grid-cols-2 gap-2 text-xs'>
          <span className='rounded-[var(--proposal-radius-sm)] border border-[var(--proposal-border-weak)] px-2 py-1 text-[var(--proposal-text-support)]'>
            Weak border
          </span>
          <span className='rounded-[var(--proposal-radius-sm)] border border-[var(--proposal-border-strong)] px-2 py-1 text-[var(--proposal-text-strong)]'>
            Strong border
          </span>
        </div>
      </div>

      <div className='rounded-[var(--proposal-radius-md)] bg-[var(--proposal-primary-weak)] p-3'>
        <div className='flex flex-wrap items-center gap-2'>
          <span className='rounded-[var(--proposal-radius-sm)] bg-[var(--proposal-primary)] px-2 py-1 text-xs font-bold text-white'>
            Primary
          </span>
          <span className='rounded-[var(--proposal-radius-sm)] bg-[var(--proposal-primary-hover)] px-2 py-1 text-xs font-bold text-white'>
            Hover
          </span>
          <span
            className='rounded-[var(--proposal-radius-sm)] bg-[var(--proposal-surface-raised)] px-2 py-1 text-xs font-bold text-[var(--proposal-text-strong)]'
            style={{ boxShadow: '0 0 0 3px var(--proposal-focus)' }}
          >
            Focus
          </span>
        </div>
        <p className='mt-3 text-sm text-[var(--proposal-primary)]'>
          Primary weak should support emphasis without turning every section
          into a callout.
        </p>
      </div>
    </div>

    <div className='grid gap-2 sm:grid-cols-2 xl:grid-cols-4'>
      {semanticUsageSamples.map(([role, label, message]) => (
        <div
          key={role}
          className='rounded-[var(--proposal-radius-md)] border border-[var(--proposal-border-weak)] bg-[var(--proposal-surface-raised)] p-3'
        >
          <div className='flex items-center gap-2'>
            <span
              className='h-3 w-3 rounded-full'
              style={{ backgroundColor: `var(--proposal-${role})` }}
            />
            <p
              className='text-xs font-bold'
              style={{ color: `var(--proposal-${role})` }}
            >
              {label}
            </p>
          </div>
          <p className='mt-2 text-xs leading-5 text-[var(--proposal-text-support)]'>
            {message}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const TypographySpecimen = ({
  proposal,
  compact = false,
}: {
  proposal: VisualTokenProposal;
  compact?: boolean;
}) => (
  <div className='grid gap-3'>
    <div>
      <p className='text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--proposal-primary)]'>
        Display
      </p>
      <p
        className='mt-1 text-3xl font-bold leading-[1.05] text-[var(--proposal-text-strong)]'
        style={{ fontFamily: 'var(--proposal-font-display)' }}
      >
        Serbisyong malinaw
      </p>
    </div>
    <p className='max-w-prose text-sm leading-6 text-[var(--proposal-text-support)]'>
      {compact
        ? 'Maghanda ng valid ID at reference number bago pumunta sa opisina.'
        : 'Maghanda ng valid ID at reference number bago pumunta sa opisina. This sample checks Filipino and English service copy, numerals, and dense instruction text.'}
    </p>
    <code
      className='block rounded-[var(--proposal-radius-sm)] bg-[var(--proposal-primary-weak)] px-3 py-2 text-xs text-[var(--proposal-primary)]'
      style={{ fontFamily: 'var(--proposal-font-mono)' }}
    >
      {proposal.typography.note}
    </code>
  </div>
);

const ScaleSpecimen = () => (
  <div className='grid gap-3 text-xs text-[var(--proposal-text-support)]'>
    {systemTokenRows.map(([label, description]) => (
      <div
        key={label}
        className='grid grid-cols-[5.5rem_1fr] items-center gap-3'
      >
        <span className='font-bold text-[var(--proposal-text-strong)]'>
          {label}
        </span>
        <span>{description}</span>
      </div>
    ))}
    <div className='flex items-end gap-2'>
      <span className='h-4 w-8 rounded-[var(--proposal-radius-sm)] bg-[var(--proposal-primary-weak)]' />
      <span className='h-6 w-10 rounded-[var(--proposal-radius-md)] bg-[var(--proposal-primary-weak)]' />
      <span className='h-8 w-12 rounded-[var(--proposal-radius-lg)] bg-[var(--proposal-primary-weak)]' />
      <span
        className='ml-2 h-10 w-16 rounded-[var(--proposal-radius-md)] bg-[var(--proposal-surface-raised)]'
        style={{ boxShadow: 'var(--proposal-shadow-low)' }}
      />
      <span
        className='h-10 w-16 rounded-[var(--proposal-radius-md)] bg-[var(--proposal-surface-raised)]'
        style={{ boxShadow: 'var(--proposal-shadow-medium)' }}
      />
    </div>
  </div>
);

const MiniCivicSurface = ({ proposal }: { proposal: VisualTokenProposal }) => (
  <div className='grid gap-3'>
    <div className='rounded-[var(--proposal-radius-lg)] border border-[var(--proposal-border-weak)] bg-[var(--proposal-surface-raised)] p-4 shadow-[var(--proposal-shadow-low)]'>
      {proposal.id === 'clear-national-signal' && (
        <div className='mb-4 overflow-hidden rounded-[var(--proposal-radius-sm)] border border-[var(--proposal-border-weak)]'>
          <div className='grid grid-cols-[1.4fr_0.35fr_0.25fr]'>
            <span className='h-2 bg-[var(--proposal-primary)]' />
            <span className='h-2 bg-[var(--proposal-focus)]' />
            <span className='h-2 bg-[var(--proposal-danger)]' />
          </div>
          <div className='bg-[var(--proposal-primary)] px-3 py-2 text-white'>
            <p className='text-[10px] font-bold uppercase tracking-[0.12em] opacity-85'>
              Republic service portal
            </p>
            <p
              className='mt-0.5 text-sm font-bold'
              style={{ fontFamily: 'var(--proposal-font-display)' }}
            >
              Official public advisory
            </p>
          </div>
        </div>
      )}
      <div className='flex items-start justify-between gap-3'>
        <div>
          <p className='text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--proposal-primary)]'>
            Permit renewal
          </p>
          <h4
            className='mt-1 text-lg font-bold leading-tight text-[var(--proposal-text-strong)]'
            style={{ fontFamily: 'var(--proposal-font-display)' }}
          >
            Business permit appointment
          </h4>
        </div>
        <span className='rounded-[var(--proposal-radius-sm)] bg-[var(--proposal-primary-weak)] px-2 py-1 text-xs font-bold text-[var(--proposal-primary)]'>
          Open
        </span>
      </div>
      <div className='mt-4 grid gap-2 text-sm text-[var(--proposal-text-support)]'>
        <div className='flex justify-between gap-3 border-t border-[var(--proposal-border-weak)] pt-3'>
          <span>Earliest slot</span>
          <strong className='text-[var(--proposal-text-strong)]'>
            May 2, 9:30 AM
          </strong>
        </div>
        <div className='flex justify-between gap-3'>
          <span>Queue load</span>
          <strong className='text-[var(--proposal-warning)]'>Moderate</strong>
        </div>
      </div>
      <div className='mt-4 flex flex-wrap gap-2'>
        <ProposalButton>Book slot</ProposalButton>
        <ProposalButton variant='outline'>Requirements</ProposalButton>
      </div>
    </div>
    <div className='rounded-[var(--proposal-radius-md)] border border-[var(--proposal-border-weak)] bg-[var(--proposal-surface-raised)] p-3 text-sm'>
      <p className='font-bold text-[var(--proposal-danger)]'>Alert</p>
      <p className='mt-1 text-[var(--proposal-text-support)]'>
        Use red only for critical deadlines, destructive actions, or service
        interruption.
      </p>
    </div>
  </div>
);

const ComparisonSpecimen = ({
  proposal,
}: {
  proposal: VisualTokenProposal;
}) => (
  <article
    className={`grid gap-5 border-t-4 bg-[var(--proposal-surface)] p-5 text-[var(--proposal-text-strong)] shadow-[var(--proposal-shadow-low)] ${
      proposal.badge ? 'border-[var(--proposal-primary)]' : 'border-transparent'
    }`}
    style={getProposalStyle(proposal)}
  >
    <header className='grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start'>
      <div>
        <div className='flex flex-wrap items-center gap-2'>
          <h3
            className='text-2xl font-bold leading-tight'
            style={{ fontFamily: 'var(--proposal-font-display)' }}
          >
            {proposal.name}
          </h3>
          {proposal.badge && (
            <span className='rounded-[var(--proposal-radius-sm)] bg-[var(--proposal-primary)] px-2 py-1 text-xs font-bold text-white'>
              Recommended
            </span>
          )}
        </div>
        <p className='mt-2 text-sm leading-6 text-[var(--proposal-text-support)]'>
          {proposal.intent}
        </p>
      </div>
      <div className='rounded-[var(--proposal-radius-md)] border border-[var(--proposal-border-weak)] bg-[var(--proposal-surface-raised)] px-3 py-2 text-xs text-[var(--proposal-text-support)] lg:max-w-64'>
        <strong className='block text-[var(--proposal-text-strong)]'>
          Best for
        </strong>
        {proposal.bestFor}
      </div>
    </header>

    <div className='grid gap-5 xl:grid-cols-[1.05fr_0.95fr]'>
      <div className='grid gap-4'>
        <section>
          <h4 className='mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--proposal-primary)]'>
            Token palette
          </h4>
          <TailwindStyleColorStrip proposal={proposal} />
        </section>
        <section>
          <h4 className='mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--proposal-primary)]'>
            Applied color roles
          </h4>
          <PaletteUsageSpecimen />
        </section>
        <section className='grid gap-4 md:grid-cols-[1fr_0.75fr]'>
          <div>
            <h4 className='mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--proposal-primary)]'>
              Typography
            </h4>
            <TypographySpecimen compact proposal={proposal} />
          </div>
          <div>
            <h4 className='mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--proposal-primary)]'>
              Shape and depth
            </h4>
            <ScaleSpecimen proposal={proposal} />
          </div>
        </section>
      </div>

      <section>
        <h4 className='mb-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--proposal-primary)]'>
          Civic component specimen
        </h4>
        <MiniCivicSurface proposal={proposal} />
      </section>
    </div>
  </article>
);

const ButtonSamples = () => (
  <div className='flex flex-wrap gap-2'>
    <ProposalButton>Apply online</ProposalButton>
    <ProposalButton variant='secondary'>Save draft</ProposalButton>
    <ProposalButton variant='outline'>View checklist</ProposalButton>
    <ProposalButton variant='ghost'>Learn more</ProposalButton>
    <ProposalButton variant='disabled'>Unavailable</ProposalButton>
    <ProposalButton variant='danger'>Cancel request</ProposalButton>
  </div>
);

const FormSamples = () => (
  <div className='grid gap-4 sm:grid-cols-2'>
    <label className='block'>
      <span className='text-sm font-semibold text-[var(--proposal-text-strong)]'>
        Reference number
      </span>
      <input
        className='mt-2 h-11 w-full rounded-[var(--proposal-radius-md)] border-2 border-[var(--proposal-primary)] bg-[var(--proposal-surface-raised)] px-3 text-sm text-[var(--proposal-text-strong)] outline-none'
        defaultValue='BG-2026-0412'
        style={{
          boxShadow: '0 0 0 3px var(--proposal-focus)',
        }}
      />
      <span className='mt-1 block text-xs text-[var(--proposal-text-support)]'>
        Focused field sample with visible keyboard ring.
      </span>
    </label>

    <label className='block'>
      <span className='text-sm font-semibold text-[var(--proposal-text-strong)]'>
        Email address
      </span>
      <input
        aria-invalid='true'
        className='mt-2 h-11 w-full rounded-[var(--proposal-radius-md)] border-2 border-[var(--proposal-danger)] bg-[var(--proposal-surface-raised)] px-3 text-sm text-[var(--proposal-text-strong)] outline-none'
        defaultValue='juan@example'
      />
      <span className='mt-1 block text-xs font-medium text-[var(--proposal-danger)]'>
        Error: Enter a complete email address.
      </span>
    </label>

    <label className='block sm:col-span-2'>
      <span className='text-sm font-semibold text-[var(--proposal-text-strong)]'>
        Disabled agency field
      </span>
      <input
        className='mt-2 h-11 w-full rounded-[var(--proposal-radius-md)] border border-[var(--proposal-border-weak)] bg-[var(--proposal-border-weak)] px-3 text-sm text-[var(--proposal-text-support)]'
        defaultValue='Department record locked'
        disabled
      />
    </label>
  </div>
);

const BannerSamples = () => (
  <div className='grid gap-3'>
    {statusSamples.map(([role, label, message]) => (
      <div
        key={role}
        className='grid grid-cols-[auto_1fr] gap-3 rounded-[var(--proposal-radius-md)] border border-[var(--proposal-border-weak)] bg-[var(--proposal-surface-raised)] p-3 text-sm'
      >
        <span
          aria-hidden='true'
          className='mt-1 h-3 w-3 rounded-full'
          style={{ backgroundColor: `var(--proposal-${role})` }}
        />
        <p className='text-[var(--proposal-text-support)]'>
          <span
            className='font-bold'
            style={{ color: `var(--proposal-${role})` }}
          >
            {label}:
          </span>{' '}
          {message}
        </p>
      </div>
    ))}
  </div>
);

const ServiceCardSample = () => (
  <article className='rounded-[var(--proposal-radius-lg)] border border-[var(--proposal-border-weak)] bg-[var(--proposal-surface-raised)] p-4 shadow-[var(--proposal-shadow-low)]'>
    <p className='text-xs font-bold uppercase tracking-[0.08em] text-[var(--proposal-primary)]'>
      City services
    </p>
    <h5 className='mt-2 text-lg font-bold leading-snug text-[var(--proposal-text-strong)]'>
      Request a barangay clearance appointment
    </h5>
    <p className='mt-2 text-sm leading-6 text-[var(--proposal-text-support)]'>
      Check requirements, choose an available slot, and receive a confirmation
      number before visiting the office.
    </p>
    <div className='mt-4 flex flex-wrap gap-2'>
      <span className='rounded-[var(--proposal-radius-sm)] bg-[var(--proposal-primary-weak)] px-2 py-1 text-xs font-semibold text-[var(--proposal-primary)]'>
        Online first
      </span>
      <span className='rounded-[var(--proposal-radius-sm)] border border-[var(--proposal-border-weak)] px-2 py-1 text-xs font-semibold text-[var(--proposal-text-support)]'>
        10 minutes
      </span>
    </div>
  </article>
);

const TableSample = () => (
  <div className='overflow-hidden rounded-[var(--proposal-radius-md)] border border-[var(--proposal-border-weak)]'>
    <table className='w-full border-collapse text-left text-sm'>
      <thead className='bg-[var(--proposal-primary-weak)] text-[var(--proposal-text-strong)]'>
        <tr>
          <th className='px-3 py-2 font-bold'>Office</th>
          <th className='px-3 py-2 font-bold'>Queue</th>
          <th className='px-3 py-2 font-bold'>Status</th>
        </tr>
      </thead>
      <tbody className='divide-y divide-[var(--proposal-border-weak)] bg-[var(--proposal-surface-raised)] text-[var(--proposal-text-support)]'>
        <tr>
          <td className='px-3 py-2 text-[var(--proposal-text-strong)]'>
            Civil registry
          </td>
          <td className='px-3 py-2'>24</td>
          <td className='px-3 py-2 font-semibold text-[var(--proposal-success)]'>
            Open
          </td>
        </tr>
        <tr>
          <td className='px-3 py-2 text-[var(--proposal-text-strong)]'>
            Permits
          </td>
          <td className='px-3 py-2'>18</td>
          <td className='px-3 py-2 font-semibold text-[var(--proposal-warning)]'>
            Delayed
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const ArticleSample = () => (
  <article className='border-l-4 border-[var(--proposal-primary)] bg-[var(--proposal-surface-raised)] py-3 pl-4 pr-3'>
    <p className='text-xs font-semibold text-[var(--proposal-text-support)]'>
      Public advisory | April 30, 2026 | City Information Office
    </p>
    <h5 className='mt-1 text-base font-bold leading-snug text-[var(--proposal-text-strong)]'>
      Updated schedule for business permit renewal counters
    </h5>
    <p className='mt-2 text-sm leading-6 text-[var(--proposal-text-support)]'>
      Renewal counters will accept online appointment holders first, followed by
      walk-in applicants with complete requirements.
    </p>
  </article>
);

const FocusSamples = () => (
  <div className='grid gap-3 sm:grid-cols-2'>
    <button
      className='rounded-[var(--proposal-radius-md)] bg-[var(--proposal-surface-raised)] px-4 py-3 text-left text-sm font-semibold text-[var(--proposal-primary)]'
      style={{
        boxShadow:
          '0 0 0 3px var(--proposal-focus), inset 0 0 0 1px var(--proposal-primary)',
      }}
      type='button'
    >
      Focus on raised surface
    </button>
    <button
      className='rounded-[var(--proposal-radius-md)] bg-[var(--proposal-primary)] px-4 py-3 text-left text-sm font-semibold text-white'
      style={{
        boxShadow:
          '0 0 0 3px var(--proposal-focus), 0 0 0 5px var(--proposal-primary)',
      }}
      type='button'
    >
      Focus on primary action
    </button>
  </div>
);

const ProposalSummary = ({ proposal }: { proposal: VisualTokenProposal }) => (
  <div className='grid gap-3 text-sm text-[var(--proposal-text-support)] sm:grid-cols-2'>
    <p>
      <span className='font-bold text-[var(--proposal-text-strong)]'>
        Intended use:
      </span>{' '}
      {proposal.bestFor}
    </p>
    <p>
      <span className='font-bold text-[var(--proposal-text-strong)]'>
        Strength:
      </span>{' '}
      {proposal.strengths}
    </p>
    <p>
      <span className='font-bold text-[var(--proposal-text-strong)]'>
        Risk:
      </span>{' '}
      {proposal.risks}
    </p>
    <p>
      <span className='font-bold text-[var(--proposal-text-strong)]'>
        Feedback:
      </span>{' '}
      {proposal.feedbackPrompt}
    </p>
  </div>
);

const ProposalPreview = ({
  proposal,
  compact = false,
}: {
  proposal: VisualTokenProposal;
  compact?: boolean;
}) => (
  <div
    className={`min-w-0 bg-[var(--proposal-surface)] p-5 text-[var(--proposal-text-strong)] ${
      proposal.badge
        ? 'ring-2 ring-[var(--proposal-primary)] ring-offset-2 ring-offset-white'
        : ''
    }`}
    style={getProposalStyle(proposal)}
  >
    <FontImports />
    <div className='mx-auto max-w-5xl space-y-6'>
      <header className='border-b border-[var(--proposal-border-weak)] pb-5'>
        <div className='flex flex-wrap items-center gap-2'>
          <p className='text-xs font-bold uppercase tracking-[0.08em] text-[var(--proposal-primary)]'>
            Draft visual token proposal
          </p>
          {proposal.badge && (
            <span className='rounded-[var(--proposal-radius-sm)] bg-[var(--proposal-primary)] px-2 py-1 text-xs font-bold text-white'>
              {proposal.badge}
            </span>
          )}
        </div>
        <h3
          className='mt-2 text-3xl font-bold leading-tight'
          style={{ fontFamily: 'var(--proposal-font-display)' }}
        >
          {proposal.name}
        </h3>
        <p className='mt-2 max-w-3xl text-sm leading-6 text-[var(--proposal-text-support)]'>
          {proposal.intent}
        </p>
      </header>

      <ProposalSection title='Decision summary'>
        <ProposalSummary proposal={proposal} />
      </ProposalSection>

      <ProposalSection title='Token roles'>
        <PaletteStrip proposal={proposal} />
      </ProposalSection>

      <ProposalSection title='Typography and font candidates'>
        <TypographySpecimen proposal={proposal} />
      </ProposalSection>

      <ProposalSection title='Actions'>
        <ButtonSamples />
      </ProposalSection>

      <ProposalSection title='Forms and validation'>
        <FormSamples />
      </ProposalSection>

      <ProposalSection title='Status messages'>
        <BannerSamples />
      </ProposalSection>

      <ProposalSection title='Service surfaces'>
        <div className='grid gap-4 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]'>
          <ServiceCardSample />
          <div className='space-y-4'>
            <TableSample />
            {!compact && <ArticleSample />}
          </div>
        </div>
      </ProposalSection>

      <ProposalSection title='Focus states'>
        <FocusSamples />
      </ProposalSection>
    </div>
  </div>
);

const DesignEngineerRecommendation = () => (
  <section className='max-w-4xl border-l-4 border-[var(--color-kapwa-bg-brand-default)] bg-[var(--color-kapwa-bg-surface)] py-4 pl-5 pr-4 text-[var(--color-kapwa-text-strong)]'>
    <h3 className='kapwa-heading-sm mb-2'>Design engineer read</h3>
    <p className='kapwa-body-md-default text-[var(--color-kapwa-text-support)]'>
      Clear National Signal has the strongest immediate recognition, but it is
      risky as the everyday default because teams can overuse national colors
      until service screens feel like campaign pages. The recommended direction
      is Civic Signal Default: keep the service-first calm of Calm Civic, then
      borrow Clear National Signal&apos;s official blue as a controlled identity
      layer.
    </p>
  </section>
);

const VisualDirectionComparisonStory = () => (
  <div className='w-full space-y-8 py-8'>
    <FontImports />
    <header className='max-w-4xl px-2'>
      <p className='kapwa-label-md mb-2 text-[var(--color-kapwa-bg-brand-default)]'>
        RFC review surface
      </p>
      <h2 className='kapwa-heading-lg mb-3 text-[var(--color-kapwa-text-strong)]'>
        Visual token proposal comparison
      </h2>
      <p className='kapwa-body-md-default text-[var(--color-kapwa-text-support)]'>
        These are temporary Storybook samples for public feedback. They use the
        same civic UI surfaces so reviewers can compare aesthetic direction,
        hierarchy, contrast, and trust without changing Kapwa production tokens.
      </p>
    </header>

    <DesignEngineerRecommendation />

    <div className='grid gap-5'>
      {visualTokenProposals.map(proposal => (
        <ComparisonSpecimen key={proposal.id} proposal={proposal} />
      ))}
    </div>
  </div>
);

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

export const VisualDirectionComparison: Story = {
  render: () => <VisualDirectionComparisonStory />,
};

export const CalmCivicDefault: Story = {
  render: () => (
    <ProposalPreview
      proposal={visualTokenProposals[0] as VisualTokenProposal}
    />
  ),
};

export const WarmPublicService: Story = {
  render: () => (
    <ProposalPreview
      proposal={visualTokenProposals[1] as VisualTokenProposal}
    />
  ),
};

export const ClearNationalSignal: Story = {
  render: () => (
    <ProposalPreview
      proposal={visualTokenProposals[2] as VisualTokenProposal}
    />
  ),
};

export const CivicSignalDefault: Story = {
  render: () => (
    <ProposalPreview
      proposal={visualTokenProposals[3] as VisualTokenProposal}
    />
  ),
};
