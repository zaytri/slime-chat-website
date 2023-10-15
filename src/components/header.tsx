import Link from 'next/link'
import Navigation from './navigation'
import Image from 'next/image'
import logo from '../../public/assets/logo.png'

export default function Header() {
  return (
    <header className='flex w-screen flex-col items-center bg-emerald-800 pt-10'>
      <Link href='/'>
        <Image
          src={logo}
          className='logo max-h-48 w-auto px-10 pb-5'
          alt='Slime2 Logo'
          priority
        />
      </Link>
      <Navigation />
    </header>
  )
}
