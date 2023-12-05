import Permission from './permission'

export default function TwitchPermissions() {
  return (
    <section className='mt-10 rounded-lg border-2 border-emerald-900 bg-emerald-700 p-5 text-lime-100'>
      <h2 className='mb-5 font-round text-3xl font-medium'>
        Permissions Explanation
      </h2>
      <div className='space-y-3'>
        <Permission title='View stream chat messages'>
          <ul className='ml-4 list-outside list-disc'>
            <li>Allows widgets to get the chat messages of your stream</li>
          </ul>
        </Permission>
        <Permission title='View list of followers'>
          <ul className='ml-4 flex list-outside list-disc flex-col gap-2'>
            <li>Allows widgets to get the follow date of your followers</li>
            <li>
              This can be used in chat widgets to filter or customize chat based
              on follow date
            </li>
          </ul>
        </Permission>
        <Permission title='View channel point custom rewards'>
          <ul className='ml-4 flex list-outside list-disc flex-col gap-2'>
            <li>
              Allows widgets to get the data of redeemed channel point rewards
              that require text
            </li>
          </ul>
        </Permission>
      </div>
    </section>
  )
}
