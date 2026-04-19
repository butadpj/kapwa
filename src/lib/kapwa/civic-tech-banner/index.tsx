type CivicTechBannerItem = {
  title: string;
  highlightedWord: string;
  description: string;
  highlightedPhrase: string;
  primaryButton: {
    text: string;
    className?: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    className?: string;
    href: string;
  };
};

const CivicTechBanner = ({
  fullBannerTitle,
  fullBanner,
}: {
  fullBannerTitle: string;
  fullBanner: CivicTechBannerItem;
}) => {
  return (
    <div>
      <h3 className='font-medium mb-4'>{fullBannerTitle}</h3>
      <div className='relative overflow-hidden rounded-lg bg-linear-to-br from-kapwa-orange-500 via-kapwa-red-500 to-kapwa-purple-700 py-12 text-[var(--color-kapwa-text-inverse)]'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            {fullBanner.title}{' '}
            <span className='text-kapwa-yellow-200'>
              {fullBanner.highlightedWord}
            </span>{' '}
            Revolution
          </h2>
          <p className='mx-auto mb-6 max-w-2xl text-lg text-kapwa-orange-100'>
            {fullBanner.description}
            <strong className='text-kapwa-yellow-200'>
              {' '}
              {fullBanner.highlightedPhrase}
            </strong>
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              className={
                fullBanner.primaryButton.className ||
                'rounded-lg bg-[var(--color-kapwa-bg-surface)] px-6 py-3 font-bold text-[var(--color-kapwa-text-strong)] hover:bg-[var(--color-kapwa-bg-surface-raised)]'
              }
              href={fullBanner.primaryButton.href}
            >
              {fullBanner.primaryButton.text}
            </a>
            <a
              className={
                fullBanner.secondaryButton.className ||
                'rounded-lg border-2 border-[var(--color-kapwa-border-inverse)] px-6 py-3 font-semibold text-[var(--color-kapwa-text-inverse)] hover:bg-[var(--color-kapwa-bg-surface)] hover:text-[var(--color-kapwa-text-strong)]'
              }
              href={fullBanner.secondaryButton.href}
            >
              {fullBanner.secondaryButton.text}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CivicTechBanner };
export type { CivicTechBannerItem };
