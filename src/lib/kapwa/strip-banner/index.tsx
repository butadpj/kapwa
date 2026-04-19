type StripBannerItem = {
  id: number;
  emoji: string;
  mainText: string;
  subText: string;
  primaryButton: {
    text: string;
    className?: string;
    href: string;
  };
  secondaryLink: {
    text: string;
    className?: string;
    href: string;
  };
};
const StripBanner = ({
  stripBannerTitle,
  stripBanner,
}: {
  stripBannerTitle: string;
  stripBanner: StripBannerItem;
}) => {
  return (
    <div>
      <h3 className='font-medium mb-4'>{stripBannerTitle}</h3>
      <div className='relative overflow-hidden rounded-lg bg-linear-to-r from-kapwa-orange-500 via-kapwa-red-500 to-kapwa-purple-600 py-3 text-[var(--color-kapwa-text-inverse)]'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between gap-2'>
            <div className='flex items-center gap-3'>
              <span className='font-bold text-sm'>
                {stripBanner.emoji} {stripBanner.mainText}
              </span>
              <span className='hidden text-sm text-kapwa-orange-100 md:inline'>
                {stripBanner.subText}
              </span>
            </div>
            <div className='flex items-center gap-3'>
              <a
                className={
                  stripBanner.primaryButton.className ||
                  'rounded-full bg-[var(--color-kapwa-bg-surface)] px-4 py-1.5 text-sm font-semibold text-[var(--color-kapwa-text-strong)] hover:bg-[var(--color-kapwa-bg-surface-raised)]'
                }
                href={stripBanner.primaryButton.href}
              >
                {stripBanner.primaryButton.text}
              </a>
              <a
                className={
                  stripBanner.secondaryLink.className ||
                  'text-kapwa-orange-200 text-xs underline'
                }
                href={stripBanner.secondaryLink.href}
              >
                {stripBanner.secondaryLink.text}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { StripBanner };
export type { StripBannerItem };
