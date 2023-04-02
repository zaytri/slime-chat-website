import {
  Radio_Canada,
  Fredoka,
  Finlandica,
  Grandstander,
} from 'next/font/google'

const radioCanada = Radio_Canada({
  subsets: ['latin'],
  variable: '--font-radio-canada',
  display: 'swap',
})

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
  display: 'swap',
})

const finlandica = Finlandica({
  subsets: ['latin'],
  variable: '--font-finlandica',
  display: 'swap',
})

const grandstander = Grandstander({
  subsets: ['latin'],
  variable: '--font-grandstander',
  display: 'swap',
})

const fontClasses = [radioCanada, fredoka, finlandica, grandstander]
  .map(font => font.variable)
  .join(' ')

export default fontClasses
