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
                The only thing that slime2 stores about you is the user ID of
                the platform that you used to sign in, such as Twitch or
                YouTube, and the authentication tokens required to connect to
                that platform for the purposes of parsing your live streaming
                data.
              </li>
            </ul>
          </Permission>
          <Permission title='How your data is used'>
            <ul className='ml-4 flex list-outside list-disc flex-col gap-2'>
              <li>
                While using this website, your data is used to identify you so
                that you can download a platform key specific to you. You will
                not have access to anyone else's platform keys.
              </li>
              <li>
                When you add a platform key to a slime2 widget folder, the
                slime2 app will then use that platform key to retrieve your live
                streaming data. You can always opt out of this by simply
                deleting the key. Your live streaming data will only be used by
                the slime2 app while the widget's HTML file is open.
              </li>
              <li>
                A slime2 widget can be developed by anyone. The slime2 app
                parses your live stream data and sends it into the widget.
                slime2 is not liable for what a widget does with that data, so
                it is up to you to trust and review the privacy policies of each
                widget you decide to use.
              </li>
            </ul>
          </Permission>
          <Permission title='Cookies'>
            <ul className='ml-4 flex list-outside list-disc flex-col gap-2'>
              <li>Your browser cookies are never accessed by slime2.</li>
            </ul>
          </Permission>
        </div>
      </section>
    </div>
  )
}
