import Link from 'next/link'
import Navigation from './navigation'

export default function Header() {
  return (
    <header className='flex w-screen flex-col items-center bg-emerald-800 pt-10'>
      <Link href='/'>
        <img src='/logo.png' className='logo pb-5' alt='SlimeChat Logo' />
      </Link>
      <Navigation />
    </header>
  )
}
