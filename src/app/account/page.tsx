'use client'

import axios from 'axios'
import { nanoid } from 'nanoid'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Button, { ButtonIcon, ButtonText } from '@/components/button'
import * as Icon from 'react-feather'
import Loading from '@/components/loading'
import User from './user'

const sessionStateKey = 'slime2-oauth-state'

const links: LoginLink[] = [
  { provider: 'twitch', text: 'Twitch Login', icon: Icon.Twitch },
  { provider: 'google', text: 'YouTube Login', icon: Icon.Youtube },
]

type LoginLink = {
  provider: Provider
  text: string
  icon: Icon.Icon
}

export default function Account() {
  const [state, setState] = useState<string>()
  const [loginClicked, setLoginClicked] = useState(false)
  const [provider, setProvider] = useState<Provider>()
  const [code, setCode] = useState<string>()
  const [keyExpiration, setKeyExpiration] = useState<Date | null>(null)
  const [jwt, setJWT] = useState<string>()
  const [name, setName] = useState<string>()
  const [image, setImage] = useState<string>()
  const [failed, setFailed] = useState(false)
  const searchParams = useSearchParams()

  function logout(error: boolean = false) {
    // clean URL
    window.history.replaceState(null, '', window.location.pathname)

    setLoginClicked(false)
    setProvider(undefined)
    setCode(undefined)
    setKeyExpiration(null)
    setJWT(undefined)
    setName(undefined)
    setImage(undefined)
    setFailed(error)
  }

  useEffect(() => {
    const sessionState = getSessionState()
    setState(sessionState)

    const codeParam = searchParams.get('code')
    const stateParam = searchParams.get('state')
    const providerParam = searchParams.get('provider')

    // clean URL
    window.history.replaceState(null, '', window.location.pathname)

    // set code and provider if they exist and the state matches
    if (codeParam && providerParam && stateParam === sessionState) {
      setCode(codeParam)
      setProvider(providerParam as Provider)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await axios
          .post<AuthLoginResponse>(`/api/auth/${provider}/login`, { code })
          .then(response => response.data)
        if (user.keyExpiration) {
          setKeyExpiration(new Date(user.keyExpiration))
        }
        setImage(user.image)
        setName(user.name)
        setJWT(user.jwt)
      } catch {
        // unable to fetch user
        logout(true)
      }
    }

    if (code && provider && !jwt) {
      fetchUser()
    }
  }, [code, provider, jwt])

  if (!state) return null

  if (jwt && !failed) {
    return (
      <User
        jwt={jwt}
        image={image!}
        provider={provider!}
        name={name!}
        keyExpiration={keyExpiration}
        logout={logout}
        setKeyExpiration={setKeyExpiration}
      />
    )
  }

  if (code && provider && !failed) {
    // authorization code successfully obtained
    return <Loading message='Verifying Authorization...' />
  }

  const loginSearchParams = new URLSearchParams({ state })
  function loginLink(provider: Provider) {
    return `/api/auth/${provider}?${loginSearchParams.toString()}`
  }

  function onLoginClick() {
    setLoginClicked(true)
  }

  if (loginClicked && !failed) {
    return <Loading message='Redirecting to Authorization...' />
  }

  return (
    <div className='space-y-5'>
      <p className='rounded-lg border-2 border-rose-800 bg-rose-100 px-5 py-3 text-lg font-medium'>
        <strong>Warning:</strong> This page is in beta. Do not use unless you
        have been assigned as a tester by Zaytri.
      </p>
      {failed && (
        <p className='rounded-lg border-2 border-rose-800 bg-rose-100 px-5 py-3 text-lg font-medium'>
          Something went wrong, please login again.
        </p>
      )}
      {links.map(({ provider, text, icon: LogoIcon }) => {
        return (
          <Button
            key={provider}
            className='px-5 pb-3 pt-5 text-3xl'
            href={loginLink(provider)}
            onClick={onLoginClick}
          >
            <ButtonIcon>
              <LogoIcon width='1em' height='1em' />
            </ButtonIcon>
            <ButtonText>{text}</ButtonText>
          </Button>
        )
      })}
    </div>
  )
}

// get the oauth state from session storage
function getSessionState(): string {
  let sessionState = sessionStorage.getItem(sessionStateKey)

  // generate new state if it doesn't exist
  if (!sessionState) {
    sessionState = nanoid()
    sessionStorage.setItem(sessionStateKey, sessionState)
  }

  return sessionState
}
