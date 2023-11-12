import Link, { LinkProps } from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  className?: string
  internalLink?: boolean
  href?: string
  onClick?: () => void
}

export default function Button(props: React.PropsWithChildren<ButtonProps>) {
  return (
    <InternalButton
      {...props}
      className={clsx(
        'btn-shadow-i flex justify-center gap-2 overflow-hidden rounded-2xl border-2 border-emerald-800 bg-gradient-to-b from-lime-600 to-emerald-700 text-center hover:from-lime-500 hover:to-emerald-600 focus:outline-offset-8 active:bg-gradient-to-t active:from-lime-600 active:to-emerald-700',
        props.className,
      )}
    />
  )
}

type ButtonIconProps = JSX.IntrinsicElements['span'] & {
  className?: string
}

export function ButtonIcon(props: React.PropsWithChildren<ButtonIconProps>) {
  return (
    <span
      {...props}
      className={clsx(
        'font-display font-semibold text-lime-100 drop-shadow drop-shadow-c-black/75 drop-shadow-y-0.5',
        props.className,
      )}
    />
  )
}

type ButtonTextProps = JSX.IntrinsicElements['span'] & {
  className?: string
}

export function ButtonText(props: React.PropsWithChildren<ButtonTextProps>) {
  return (
    <span
      {...props}
      className={clsx(
        'font-display font-semibold text-lime-100 text-shadow text-shadow-c-black/75 text-shadow-y-0.5',
        props.className,
      )}
    />
  )
}

function InternalButton({
  href,
  internalLink: internal,
  ...props
}: React.PropsWithChildren<ButtonProps>) {
  if (href === undefined) {
    return <button type='button' {...props} />
  }

  return <Link href={href} target={internal ? '_self' : '_blank'} {...props} />
}
