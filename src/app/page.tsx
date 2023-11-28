import Button, { ButtonText } from '@/components/button'
import prisma from '@/helpers/database'

export const revalidate = 300 // revalidate the data at most every 5 minutes

const links = [
  [
    'Widget Gallery',
    'https://forums.slime2.stream/resources/categories/widgets.2/',
  ],
  ['Widget Dev Docs', 'https://docs.slime2.stream/'],
  ['Community Forums', 'https://forums.slime2.stream/'],
  [
    'What is slime2?',
    'https://forums.slime2.stream/threads/what-is-slime2.36/',
  ],
  ['GitHub Code', 'https://github.com/zaytri/slime2'],
]

export default async function Home() {
  const userCount = await prisma.user.count()

  return (
    <div className='space-y-5 text-center font-round'>
      <h1 className='text-3xl font-medium'>Welcome to slime2!</h1>
      <p className='!mt-2'>
        A service for Twitch chat widgets that run locally on your computer!
      </p>
      <p className='text-xl'>
        Used by <strong className='text-2xl font-medium'>{userCount}</strong>{' '}
        streamers!
      </p>
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
