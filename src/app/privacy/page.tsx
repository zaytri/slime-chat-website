'use client'

import Permission from '@/components/permission'

export default function PrivacyPolicy() {
  return (
    <div className='space-y-5'>
      <h1 className='mb-7 text-center font-round text-3xl font-medium'>
        Privacy Policy
      </h1>
      <section className='mt-10 rounded-lg border-2 border-emerald-900 bg-emerald-700 p-5 text-lime-100'>
        <div className='space-y-3'>
          <Permission title='How your data is collected'>
            <ul className='ml-4 list-outside list-disc'>
              <li>
                slime2 will only ever store the bare minimum data required to
                let slime2 widgets access the authorized parts of the Twitch or
                YouTube API.
              </li>
              <li>
                The data that is stored from you is your user ID from either
                Twitch or YouTube, and the authentication tokens that will be
                given to slime2 widgets.
              </li>
            </ul>
          </Permission>
          <Permission title='How your data is used'>
            <ul className='ml-4 flex list-outside list-disc flex-col gap-2'>
              <li>
                While using this website, your data is used to identify you so
                that you can download a platform key specific to you. You will
                not be given access to anyone else&apos;s platform keys.
              </li>
              <li>
                By adding a platform key to a slime2 widget folder, you are
                granting that widget access to the parts of the Twitch or
                YouTube API that you have authorized. The widget will then use
                that platform key to retrieve your authentication access token,
                which will then be used to retrieve your live streaming data.
                You can always opt out of this by simply deleting the key. Your
                live streaming data will only be used by a widget while the
                widget&apos;s HTML file is open.
              </li>
              <li>
                A slime2 widget can be developed by anyone. slime2 is not liable
                for what a widget does with that data, so it is up to you to
                trust and review the privacy policies of each widget you decide
                to use.
              </li>
            </ul>
          </Permission>
          <Permission title='Deleting your data'>
            <ul className='ml-4 flex list-outside list-disc flex-col gap-2'>
              <li>
                You may delete your account at any time from your account page.
              </li>
              <li>
                By deleting your account, all of your data will be removed, and
                slime2 widgets will no longer have any access to the Twitch or
                YouTube API.
              </li>
              <li>
                The only exception to this is if you are banned from the
                services. In the case that you are banned, your user ID from
                either Twitch or YouTube will remain stored in a separate ban
                list, to ensure that you cannot regain access. You may still
                delete your account, but you will not be removed from the ban
                list.
              </li>
            </ul>
          </Permission>
          <Permission title='Twitch'>
            <ul className='ml-4 flex list-outside list-disc flex-col gap-2'>
              <li>slime2 uses Twitch API Services.</li>
              <li>
                By agreeing to this Privacy Policy, you also agree to the{' '}
                <a
                  className='text-green-700 underline'
                  href='https://www.twitch.tv/p/legal/privacy-notice'
                >
                  Twitch Privacy Notice
                </a>
                .
              </li>
              <li>
                In addition to the steps for deleting your data above, you can
                also revoke slime2&apos;s access to your data at any time via
                your{' '}
                <a
                  className='text-green-700 underline'
                  href='https://www.twitch.tv/settings/connections'
                >
                  Twitch Connections
                </a>{' '}
                page.
              </li>
            </ul>
          </Permission>
          <Permission title='YouTube'>
            <ul className='ml-4 flex list-outside list-disc flex-col gap-2'>
              <li>slime2 uses YouTube API Services.</li>
              <li>
                By agreeing to this Privacy Policy, you also agree to the{' '}
                <a
                  className='text-green-700 underline'
                  href='http://www.google.com/policies/privacy'
                >
                  Google Privacy Policy
                </a>
                .
              </li>
              <li>
                In addition to the steps for deleting your data above, you can
                also revoke slime2&apos;s access to your data at any time via
                your{' '}
                <a
                  className='text-green-700 underline'
                  href='https://security.google.com/settings/security/permissions'
                >
                  Google Security Settings
                </a>{' '}
                page.
              </li>
            </ul>
          </Permission>
          <Permission title='Cookies'>
            <ul className='ml-4 flex list-outside list-disc flex-col gap-2'>
              <li>Your browser cookies are never accessed by slime2.</li>
            </ul>
          </Permission>
          <Permission title='Contact'>
            <ul className='ml-4 flex list-outside list-disc flex-col gap-2'>
              <li>
                If you have any questions or concerns about slime2&apos;s
                privacy practices, please make a post in the slime2 community
                forum here:{' '}
                <a
                  className='text-green-700 underline'
                  href='https://forums.slime2.stream/forums/suggestions.14/'
                >
                  https://forums.slime2.stream/forums/suggestions.14/
                </a>
              </li>
            </ul>
          </Permission>
        </div>
      </section>
    </div>
  )
}
