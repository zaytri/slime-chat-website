import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='mt-5 w-screen bg-emerald-800 py-3 text-center text-lime-100'>
      slime2 created by{' '}
      <Link
        href='https://zaytri.com/'
        className='text-lime-300 hover:underline'
        target='_blank'
      >
        Zaytri
      </Link>{' '}
      |{' '}
      <Link href='/privacy' className='text-lime-300 hover:underline'>
        Privacy Policy
      </Link>{' '}
      |{' '}
      <Link href='/tos' className='text-lime-300 hover:underline'>
        Terms of Service
      </Link>
    </footer>
  )
}
