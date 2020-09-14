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
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
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
