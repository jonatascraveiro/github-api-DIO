import '../styles/globals.css'
import Head from 'next/head'
import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>

            <Component {...pageProps} />
        </>
    )
}

export default MyApp
