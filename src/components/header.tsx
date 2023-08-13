import Link from 'next/link'
import Navigation from './navigation'
import Image from 'next/image'
import logo from '../../public/logo.png'

export default function Header() {
  return (
    <header className='flex w-screen flex-col items-center bg-emerald-800 pt-10'>
      <Link href='/'>
        <Image src={logo} className='logo pb-5' alt='Slime2 Logo' />
      </Link>
      <Navigation />
    </header>
  )
}
