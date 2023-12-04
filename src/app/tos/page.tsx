'use client'

import Permission from '@/components/permission'

export default function ToS() {
  return (
    <div className='space-y-5'>
      <h1 className='mb-7 text-center font-round text-3xl font-medium'>
        Terms of Service
      </h1>
      <section className='mt-10 rounded-lg border-2 border-emerald-900 bg-emerald-700 p-5 text-lime-100'>
        <div className='space-y-3'>
          <Permission title='Bans'>
            <ul className='ml-4 list-outside list-disc'>
              <li>
                slime2 has the right to deny service to you at any time, for
                reasons that include but are not limited to violating these
                Terms of Service or using/developing slime2 widgets in a manner
                that violates these Terms of Service or is harmful to other
                users.
              </li>
              <li>
                When you are banned, your account page will display the reason
                for your ban. Your user ID from Twitch or YouTube will also be
                permanently saved in a ban list.
              </li>
            </ul>
          </Permission>
          <Permission title='Twitch'>
            <ul className='ml-4 flex list-outside list-disc flex-col gap-2'>
              <li>slime2 uses Twitch API Services.</li>
              <li>
                By agreeing to be bound by these Terms of Service, you also
                agree to be bound by Twitch&apos;s{' '}
                <a
                  className='text-green-700 underline'
                  href='https://www.twitch.tv/p/legal/terms-of-service/'
                >
                  Terms of Service
                </a>{' '}
                and{' '}
                <a
                  className='text-green-700 underline'
                  href='https://www.twitch.tv/p/legal/community-guidelines/'
                >
                  Community Guidelines
                </a>
                .
              </li>
            </ul>
          </Permission>
          <Permission title='YouTube'>
            <ul className='ml-4 flex list-outside list-disc flex-col gap-2'>
              <li>slime2 uses YouTube API Services.</li>
              <li>
                By agreeing to be bound by these Terms of Service, you also
                agree to be bound by YouTube&apos;s{' '}
                <a
                  className='text-green-700 underline'
                  href='https://www.youtube.com/t/terms'
                >
                  Terms of Service
                </a>{' '}
                and{' '}
                <a
                  className='text-green-700 underline'
                  href='https://www.youtube.com/howyoutubeworks/policies/community-guidelines/'
                >
                  Community Guidelines
                </a>
                .
              </li>
            </ul>
          </Permission>
        </div>
      </section>
    </div>
  )
}
