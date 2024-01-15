// import { Comfortaa } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

// const inter = Comfortaa({
//   weight: ['400','500','600', '700',],
//   subsets: ['latin'],
//   display: 'swap',
// })

export const metadata = {
  title: 'Детский образовательный центр в Минске',
  description: 'Приветствуем вас в нашем детском образовательном центре в Минске! Мы создаем увлекательные и разнообразные программы обучения для детей от 1 до 12 лет. Наш опытный педагогический коллектив, инновационные методики и дружеская атмосфера обеспечивают качественное и радостное обучение вашего малыша.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
