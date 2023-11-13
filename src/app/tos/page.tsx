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
          <Permission title='Widgets'>
            <ul className='ml-4 list-outside list-disc'>
              <li>
                A slime2 widget can be developed by anyone. The slime2 app
                parses your live stream data and sends it into the widget.
                slime2 is not liable for what a widget does with that data, so
                it is up to you to trust and review the privacy policies of each
                widget you decide to use.
              </li>
            </ul>
          </Permission>
        </div>
      </section>
    </div>
  )
}
