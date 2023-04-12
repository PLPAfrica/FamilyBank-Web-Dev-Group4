import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { MediumProvider } from '../context/MediumContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <MediumProvider> 
    <Component {...pageProps} />
  </MediumProvider>
  )
}
