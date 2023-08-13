import Button, { ButtonText, ButtonIcon } from '@/components/button'
import { useState } from 'react'
import * as Icon from 'react-feather'

type TokenShowProps = {
  token: string
}

export default function TokenShow({ token }: TokenShowProps) {
  const [copied, setCopied] = useState(false)
  const [visible, setVisible] = useState(false)

  // remove token from URL (but it's still shown for a split second)
  window.history.replaceState(null, '', window.location.pathname)

  function copy() {
    navigator.clipboard.writeText(token)
    setCopied(true)
  }

  function toggleVisibility() {
    setVisible(!visible)
  }

  return (
    <div className='rounded-lg border-2 border-lime-700 bg-lime-200 p-5'>
      <div className='flex items-center justify-between gap-1'>
        <h2 className='font-round text-2xl font-medium'>Generated!</h2>
        <div className='flex gap-2'>
          <Button className='p-1 px-3 text-xl' onClick={toggleVisibility}>
            <ButtonIcon>{visible ? <Icon.EyeOff /> : <Icon.Eye />}</ButtonIcon>
            <ButtonText>{visible ? 'Hide' : 'Show'}</ButtonText>
          </Button>
          <Button className='p-1 px-3 text-xl' onClick={copy}>
            {!copied && (
              <ButtonIcon>
                <Icon.Copy />
              </ButtonIcon>
            )}
            <ButtonText>{copied ? 'Copied!' : 'Copy'}</ButtonText>
          </Button>
        </div>
      </div>
      <p className='mt-3 break-all rounded-lg border-2 border-lime-700 bg-lime-100 px-5 py-3 text-center text-xl'>
        <strong>{visible ? token : '**************************'}</strong>
      </p>
      <Button
        className='mt-3 px-5 pb-3 pt-5'
        href='https://forums.slime2.stream/resources/getting-started-with-slime2.3/'
      >
        <ButtonText className='text-3xl'>Slime2 Setup</ButtonText>
      </Button>
    </div>
  )
}
