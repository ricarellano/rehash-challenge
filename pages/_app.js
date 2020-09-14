/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Link from 'next/link'
import { Provider } from 'react-redux'
import { useStore } from '../redux/store'
import '../styles/globals.css'
import styles from '../styles/Layout.module.css'

/********** THIS FILE IS PART OF TASK 1 **********/

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Head>
        <title>Rehash Take Home Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {/* MODIFY AS NEEDED */}
        <img src="static/logo.png" />
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/chat"><a>Chat</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
          </ul>
        </nav>
      </header>
      {/* DO NOT MODIFY */}
      <main className={styles.main}>
        {/* Next.js will match file names in the `pages` directory to the URI route and show the
          * the correct component by passing it here as `Component`. If this is confusing you
          * can read about it here: https://nextjs.org/docs/routing/introduction
          */}
        <Component {...pageProps} />
      </main>
      {/* END DO NOT MODIFY*/}
      <footer>
        {/* YOUR CODE HERE */}
      </footer>
    </Provider>
  )
}

export default MyApp
