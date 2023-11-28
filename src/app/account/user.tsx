import Button, { ButtonIcon, ButtonText } from '@/components/button'
import Loading from '@/components/loading'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import * as Icon from 'react-feather'

type UserProps = {
  jwt: string
  provider: Provider
  image: string
  name: string
  url: string
  keyExpiration: Date | null
  logout: (error?: boolean) => void
  setKeyExpiration: (date: Date) => void
}

const avatarSize = 60
const providerLogoSize = 20

export default function User({
  jwt,
  provider,
  image,
  name,
  keyExpiration,
  logout,
  setKeyExpiration,
  url,
}: UserProps) {
  const [downloading, setDownloading] = useState(false)
  const [newKey, setNewKey] = useState(false)

  const currentDate = new Date()
  const activeKey = keyExpiration && keyExpiration > currentDate

  useEffect(() => {
    // clean URL
    window.history.replaceState(null, '', window.location.pathname)
  }, [])

  async function download() {
    setDownloading(true)

    const keyData = await axios
      .post<AuthKeyResponse>(
        `/api/auth/${provider}/key`,
        {},
        { headers: { Authorization: `Bearer ${jwt}` } },
      )
      .then(response => response.data)
      .catch(error => console.error(error))

    if (keyData && keyData.key) {
      if (keyData.keyExpiration) {
        setKeyExpiration(new Date(keyData.keyExpiration))
      }

      // https://stackoverflow.com/a/33542499
      const scriptText = `slime2.setKey('${provider}', '${keyData.key}')`
      const blob = new Blob([scriptText], {
        type: 'text/javascript',
      })
      const downloadElement = document.createElement('a')
      downloadElement.href = URL.createObjectURL(blob)
      downloadElement.download = `SLIME2_${provider.toUpperCase()}_KEY.js`
      downloadElement.style.display = 'none'
      document.body.appendChild(downloadElement)
      downloadElement.click()
      document.body.removeChild(downloadElement)

      setNewKey(true)
    } else {
      // error fetching key
      logout(true)
    }

    setDownloading(false)
  }

  return (
    <div className='flex flex-col space-y-5'>
      <h1 className='text-center font-round text-4xl font-medium'>
        Welcome
        <Link href={url} target='_blank'>
          <div className='relative mx-3 inline-block'>
            <img
              src={image!}
              alt='Your Profile Picture'
              width={avatarSize}
              height={avatarSize}
              className='inline rounded-full'
            />

            <Image
              src={`/assets/${
                provider === 'google' ? 'youtube' : provider
              }-logo.svg`}
              height={providerLogoSize}
              width={providerLogoSize}
              alt='Stream Platform Logo'
              className='absolute -bottom-px -right-1'
            />
          </div>
        </Link>
        {name}!
      </h1>

      {downloading ? (
        <Loading message='Generating New Key...' />
      ) : (
        <>
          <Button className='px-5 pb-3 pt-5 text-3xl' onClick={download}>
            <ButtonIcon>
              <Icon.Download width='1em' height='1em' strokeWidth={3} />
            </ButtonIcon>
            <ButtonText>Download New Key</ButtonText>
          </Button>

          <p className='mt-5 rounded-lg border-2 border-amber-800 bg-amber-100 px-5 py-3'>
            <strong>
              ⚠️ Downloading a new key will expire all previous keys.
            </strong>
            <br />
            <br />
            Download a new key if you do not yet have one or your current one
            has expired. If you already have a working key downloaded, you can
            copy it into other widgets.
          </p>

          <Button
            className='px-5 pb-3 pt-5 text-3xl'
            href='https://forums.slime2.stream/resources/setting-up-slime2-widgets.3/'
          >
            <ButtonIcon>
              <Icon.HelpCircle width='1em' height='1em' strokeWidth={3} />
            </ButtonIcon>
            <ButtonText>How to Use Key</ButtonText>
          </Button>

          {keyExpiration && (
            <div className='space-y-3 rounded-lg border-2 border-lime-700 bg-lime-200 p-5 pb-4 text-center'>
              <h2 className='font-round text-3xl font-medium'>Key Status</h2>
              <p className='rounded-lg border-2 border-lime-700 bg-lime-100 px-5 py-3 text-center font-sans text-3xl font-bold'>
                {activeKey ? (
                  <span className='text-lime-700'>
                    <Icon.Smile
                      className='mb-1 mr-2 inline'
                      width='1em'
                      height='1em'
                    />
                    ACTIVE
                  </span>
                ) : (
                  <span className='text-rose-800'>
                    <Icon.Frown
                      className='mb-1 mr-2 inline'
                      width='1em'
                      height='1em'
                    />
                    EXPIRED
                  </span>
                )}
              </p>
              {newKey && (
                <p className='font-round text-xl font-medium'>
                  New Key Generated!
                </p>
              )}
            </div>
          )}

          <Button className='px-5 pb-3 pt-5 text-3xl' onClick={() => logout()}>
            <ButtonIcon>
              <Icon.LogOut width='1em' height='1em' strokeWidth={3} />
            </ButtonIcon>
            <ButtonText>Log Out</ButtonText>
          </Button>
        </>
      )}
    </div>
  )
}
