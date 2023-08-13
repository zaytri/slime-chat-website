import Button, { ButtonText } from '@/components/button'
import { useState } from 'react'

type TokenShowProps = {
  token: string
}

export default function TokenShow({ token }: TokenShowProps) {
  const [copied, setCopied] = useState(false)

  function copy() {
    navigator.clipboard.writeText(token)
    setCopied(true)
  }

  return (
    <div className='rounded-lg border-2 border-lime-700 bg-lime-200 p-5'>
      <div className='flex items-center justify-between'>
        <h2 className='font-round text-2xl font-medium'>Your Token</h2>
        <Button className='p-1 px-3 text-xl' onClick={copy}>
          <ButtonText>{copied ? 'Copied!' : 'Copy Token'}</ButtonText>
        </Button>
      </div>
      <p className='mt-3 break-all rounded-lg border-2 border-lime-700 bg-lime-100 px-5 py-3 text-center text-xl'>
        <strong>{token}</strong>
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
