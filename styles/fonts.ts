import { Rubik, Bungee } from 'next/font/google'

const display = Bungee({
  variable: '--font-capriola',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

const sans = Rubik({
  variable: '--font-gabarito',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const fonts = `${sans.variable} ${display.variable}`
