import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { AppContenxtProvider } from '../context'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <AppContenxtProvider>
      <Component {...pageProps} />
    </AppContenxtProvider>
  )
}

export default MyApp
