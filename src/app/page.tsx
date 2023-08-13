import Button, { ButtonText } from '@/components/button'

const links = [
  [
    'Getting Started',
    'https://forums.slime2.stream/resources/getting-started-with-slime2.3/',
  ],
  ['Community Forums', 'https://forums.slime2.stream/'],
  ['Get Themes', 'https://forums.slime2.stream/resources/categories/themes.2/'],
  ['GitHub Source Code', 'https://github.com/zaytri/slime2'],
]

export default function Home() {
  return (
    <div className='space-y-5'>
      <h1 className='mb-7 text-center font-round text-3xl font-medium'>
        Welcome to Slime2!
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
