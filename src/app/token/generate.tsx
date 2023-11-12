import Button, { ButtonText } from '@/components/button'

const twitchAuthorizeUrl = 'https://id.twitch.tv/oauth2/authorize'

const params = {
  response_type: 'token',
  client_id: process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID || '',
  redirect_uri: process.env.NEXT_PUBLIC_TWITCH_REDIRECT_URL || '',
  scope: [
    'chat:read',
    'channel:read:redemptions',
    'moderator:read:followers',
  ].join(' '),
  state: '',
}

type TokenGenerateProps = {
  oauthState: string
}

export default function TokenGenerate({ oauthState }: TokenGenerateProps) {
  const searchParams = new URLSearchParams({
    ...params,
    state: oauthState,
  })

  return (
    <Button
      className='px-5 pb-3 pt-5'
      href={`${twitchAuthorizeUrl}?${searchParams.toString()}`}
      internalLink
    >
      <ButtonText className='text-3xl'>Generate Token</ButtonText>
    </Button>
  )
}
