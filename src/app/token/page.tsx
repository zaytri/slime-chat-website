'use client'

import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import TokenGenerate from './generate'
import TokenShow from './show'
import Permission from '../../components/permission'
import TwitchPermissions from '@/components/twitch-permissions'

const sessionStateKey = 'slime2-twitch-oauth-state'

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

      <TwitchPermissions />
    </>
  )
}
