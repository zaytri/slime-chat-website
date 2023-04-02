import Button, { ButtonText } from '@/components/button'

export default function Home() {
  return (
    <div className='space-y-5'>
      <h1 className='mb-7 text-center font-round text-4xl font-medium'>
        Welcome to SlimeChat!
      </h1>
      <Button
        className='px-5 pb-3 pt-5'
        href='https://forums.slime.chat/resources/getting-started-with-slimechat.3/'
      >
        <ButtonText className='text-3xl'>Getting Started</ButtonText>
      </Button>

      <Button className=' px-5 pb-3 pt-5' href='https://forums.slime.chat/'>
        <ButtonText className='text-3xl'>Community Forums</ButtonText>
      </Button>

      <Button
        className=' px-5 pb-3 pt-5'
        href='https://forums.slime.chat/resources/categories/themes.2/'
      >
        <ButtonText className='text-3xl'>Get Themes</ButtonText>
      </Button>
    </div>
  )
}
