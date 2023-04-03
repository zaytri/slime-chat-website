import Button, { ButtonText } from '@/components/button'

const links = [
  [
    'Getting Started',
    'https://forums.slime.chat/resources/getting-started-with-slimechat.3/',
  ],
  ['Community Forums', 'https://forums.slime.chat/'],
  ['Get Themes', 'https://forums.slime.chat/resources/categories/themes.2/'],
  ['GitHub Source Code', 'https://github.com/zaytri/slime-chat'],
]

export default function Home() {
  return (
    <div className='space-y-5'>
      <h1 className='mb-7 text-center font-round text-3xl font-medium'>
        Welcome to SlimeChat!
      </h1>
      {links.map(([name, path]) => {
        return (
          <Button key={name} className='px-5 pb-3 pt-5' href={path}>
            <ButtonText className='text-3xl'>{name}</ButtonText>
          </Button>
        )
      })}
    </div>
  )
}
