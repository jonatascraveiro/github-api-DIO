import '../styles/globals.css'
import Head from 'next/head'
import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import GithubProvider from '../providers/github-provider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <GithubProvider>
        <Component {...pageProps} />
      </GithubProvider>
    </>
  )
}

export default MyApp
