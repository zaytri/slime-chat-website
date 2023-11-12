import Permission from './permission'

export default function TwitchPermissions() {
  return (
    <section className='mt-10 rounded-lg border-2 border-emerald-900 bg-emerald-700 p-5 text-lime-100'>
      <h2 className='mb-5 font-round text-2xl font-medium'>
        Permissions Explanation
      </h2>
      <div className='space-y-3'>
        <Permission title='View stream chat messages'>
          <ul className='ml-4 list-outside list-disc'>
            <li>{`Used to get your stream's chat messages`}</li>
          </ul>
        </Permission>
        <Permission title='View list of followers'>
          <ul className='ml-4 list-outside list-disc'>
            <li>
              Used to get the follow date of a follower that has sent a chat
              message
            </li>
            <li>
              You can use this to filter or customize chat based on that follow
              date, such as only showing chat from users who have been following
              you for over 24 hours
            </li>
          </ul>
        </Permission>
        <Permission title='View channel point custom rewards'>
          <ul className='ml-4 list-outside list-disc'>
            <li>
              Used to get the data of a channel point redemption that requires
              viewers to enter text
            </li>
            <li>
              You can use this to filter or customize chat based on channel
              point redemptions
            </li>
          </ul>
        </Permission>
      </div>
    </section>
  )
}
