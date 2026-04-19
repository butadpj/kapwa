import { Button } from '@kapwa/button';
import { Phone, Mail, Award, Building, Globe } from 'lucide-react';

export type ContactInfo = {
  office: string;
  phone: string;
  email: string;
  website: string;
};

export type Education = {
  degree: string;
  institution: string;
  year: string;
};

export type BiographyProfile = {
  name: string;
  position: string;
  servingSince: string;
  profileImage: string;
  bannerImage: string;
  contactInfo: ContactInfo;
  education: Education[];
  biography: string[];
  achievements: string[];
};

export type BiographyProps = {
  profile: BiographyProfile;
  contactCta?: {
    text: string;
    onClick: () => void;
  };
  websiteCta?: {
    text: string;
    onClick: () => void;
  };
};

export const OfficialBiography = ({
  profile,
  contactCta,
  websiteCta,
}: BiographyProps) => {
  return (
    <div className='space-y-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='overflow-hidden rounded-xl bg-[var(--color-kapwa-bg-surface)] shadow-xs'>
          {/* Header Section */}
          <div className='relative h-64 bg-[var(--color-kapwa-bg-brand-default)]'>
            <div className='absolute inset-0'>
              <img
                src={profile.bannerImage}
                alt='Office'
                className='w-full h-full object-cover opacity-20'
              />
            </div>
            <div className='absolute inset-0 bg-linear-to-b from-kapwa-brand-950/50 to-kapwa-brand-950/90' />
            <div className='relative h-full container mx-auto px-6 flex items-center'>
              <div className='flex items-center space-x-8'>
                <img
                  src={profile.profileImage}
                  alt={profile.name}
                  className='w-40 h-40 rounded-full border-4 border-white shadow-xl object-cover'
                />
                <div className='text-white'>
                  <div className='mb-1 text-sm font-medium text-kapwa-brand-200'>
                    {profile.position}
                  </div>
                  <h1 className='text-4xl font-bold mb-2'>{profile.name}</h1>
                  <p className='text-kapwa-brand-100'>{profile.servingSince}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className='container mx-auto px-6 py-8'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
              {/* Left Column - Contact & Basic Info */}
              <div className='space-y-6'>
                <div className='rounded-lg bg-[var(--color-kapwa-bg-surface-raised)] p-6'>
                  <h3 className='text-lg font-semibold mb-4'>
                    Contact Information
                  </h3>
                  <div className='space-y-4'>
                    <div className='flex items-center text-[var(--color-kapwa-text-support)]'>
                      <Building className='mr-3 h-5 w-5 text-[var(--color-kapwa-text-brand)]' />
                      <div>
                        <div className='font-medium'>Office</div>
                        <div className='text-sm'>
                          {profile.contactInfo.office}
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center text-[var(--color-kapwa-text-support)]'>
                      <Phone className='mr-3 h-5 w-5 text-[var(--color-kapwa-text-brand)]' />
                      <div>
                        <div className='font-medium'>Phone</div>
                        <div className='text-sm'>
                          {profile.contactInfo.phone}
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center text-[var(--color-kapwa-text-support)]'>
                      <Mail className='mr-3 h-5 w-5 text-[var(--color-kapwa-text-brand)]' />
                      <div>
                        <div className='font-medium'>Email</div>
                        <div className='text-sm'>
                          {profile.contactInfo.email}
                        </div>
                      </div>
                    </div>
                    <div className='flex items-center text-[var(--color-kapwa-text-support)]'>
                      <Globe className='mr-3 h-5 w-5 text-[var(--color-kapwa-text-brand)]' />
                      <div>
                        <div className='font-medium'>Website</div>
                        <div className='text-sm'>
                          {profile.contactInfo.website}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='rounded-lg bg-[var(--color-kapwa-bg-surface-raised)] p-6'>
                  <h3 className='text-lg font-semibold mb-4'>Education</h3>
                  <div className='space-y-4'>
                    {profile.education.map((edu, index) => (
                      <div
                        key={index}
                        className='border-l-2 border-[var(--color-kapwa-border-brand)] pl-4'
                      >
                        <div className='font-medium'>{edu.degree}</div>
                        <div className='text-sm text-[var(--color-kapwa-text-support)]'>
                          {edu.institution}
                        </div>
                        <div className='text-sm text-[var(--color-kapwa-text-support)]'>
                          {edu.year}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Bio & Achievements */}
              <div className='lg:col-span-2 space-y-6'>
                <div>
                  <h3 className='text-xl font-semibold mb-4'>Biography</h3>
                  <div className='prose max-w-none'>
                    {profile.biography.map((paragraph, index) => (
                      <p
                        key={index}
                        className='mt-4 leading-relaxed text-[var(--color-kapwa-text-support)] first:mt-0'
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className='text-xl font-semibold mb-4'>
                    Key Achievements
                  </h3>
                  <div className='grid gap-4'>
                    {profile.achievements.map((achievement, index) => (
                      <div key={index} className='flex items-start'>
                        <Award className='mt-1 mr-3 h-5 w-5 shrink-0 text-[var(--color-kapwa-text-brand)]' />
                        <p className='text-[var(--color-kapwa-text-support)]'>
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {(contactCta || websiteCta) && (
                  <div className='flex space-x-4 mt-8'>
                    {contactCta && (
                      <Button onClick={contactCta.onClick}>
                        <Mail className='h-4 w-4 mr-2' />
                        {contactCta.text}
                      </Button>
                    )}
                    {websiteCta && (
                      <Button variant='outline' onClick={websiteCta.onClick}>
                        <Globe className='h-4 w-4 mr-2' />
                        {websiteCta.text}
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
