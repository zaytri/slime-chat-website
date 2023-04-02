'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  ['Home', '/'],
  ['Token', '/token'],
]

export default function Navigation() {
  return (
    <nav className='font-display text-2xl'>
      <menu className='flex'>
        {links.map(([name, path]) => {
          return <NavigationItem key={name} name={name} path={path} />
        })}
      </menu>
    </nav>
  )
}

type NavigationItemProps = {
  name: string
  path: string
}

function NavigationItem({ name, path }: NavigationItemProps) {
  const currentPath = usePathname() === path

  return (
    <li>
      <Link
        href={path}
        aria-current={currentPath ? 'page' : undefined}
        className={clsx('block rounded-t-2xl px-10 pb-2 pt-3 font-medium', {
          'bg-lime-100 text-emerald-800': currentPath,
          'text-lime-300 hover:bg-lime-300 hover:text-emerald-800':
            !currentPath,
        })}
      >
        {name}
      </Link>
    </li>
  )
}
