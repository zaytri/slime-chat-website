'use client'

import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import TokenGenerate from './generate'
import TokenShow from './show'
import TokenPermission from './permission'

const sessionStateKey = 'slime-chat-twitch-oauth-state'

export default function Token() {
  const [state, setState] = useState<string>()
  const [token, setToken] = useState<string>()

  useEffect(() => {
    // get the oauth state from session storage
    let sessionState = sessionStorage.getItem(sessionStateKey)
    if (!sessionState) {
      sessionState = nanoid()
      sessionStorage.setItem(sessionStateKey, sessionState)
    }
    setState(sessionState)

    // twitch gives the token using # for no good reason
    const currentParams = new URL(window.location.href.replace('#', '?'))
      .searchParams

    const tokenParam = currentParams.get('access_token')
    const stateParam = currentParams.get('state')

    // set token if code param exists and the state matches
    if (tokenParam && tokenParam !== '' && stateParam === sessionState) {
      setToken(tokenParam)
    }
  }, [])

  if (!state) return null

  return (
    <>
      <h1 className='mb-7 text-center font-round text-3xl font-medium'>
        Authentication Token
      </h1>
      {token ? (
        <TokenShow token={token} />
      ) : (
        <TokenGenerate oauthState={state} />
      )}

      <p className='mt-5 rounded-lg border-2 border-rose-800 bg-rose-100 px-5 py-3'>
        <strong>Do not share your token with anyone</strong>. They can use it to
        gain access to all of the permissions listed below for your channel.
      </p>

      <section className='mt-10 rounded-lg border-2 border-emerald-900 bg-emerald-700 p-5 text-lime-100'>
        <h2 className='mb-5 font-round text-2xl font-medium'>
          Permissions Explanation
        </h2>
        <div className='space-y-3'>
          <TokenPermission title='View stream chat messages'>
            <ul className='ml-4 list-outside list-disc'>
              <li>{`Used to get your stream's chat messages`}</li>
            </ul>
          </TokenPermission>
          <TokenPermission title='View list of followers'>
            <ul className='ml-4 list-outside list-disc'>
              <li>
                Used to get the follow date of a follower that has sent a chat
                message
              </li>
              <li>
                You can use this to filter or customize chat based on that
                follow date, such as only showing chat from users who have been
                following you for over 24 hours
              </li>
            </ul>
          </TokenPermission>
          <TokenPermission title='View channel point custom rewards'>
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
          </TokenPermission>
        </div>
      </section>
    </>
  )
}
