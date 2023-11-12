import Button, { ButtonText } from '@/components/button'

const links = [
  [
    'Widget Gallery',
    'https://forums.slime2.stream/resources/categories/widgets.2/',
  ],
  ['Widget Dev Docs', 'https://docs.slime2.stream/'],
  ['Community Forums', 'https://forums.slime2.stream/'],
  ['GitHub Code', 'https://github.com/zaytri/slime2'],
]

export default function Home() {
  return (
    <div className='w-96 space-y-5'>
      <h1 className='mb-7 text-center font-round text-3xl font-medium'>
        Welcome to slime2!
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
