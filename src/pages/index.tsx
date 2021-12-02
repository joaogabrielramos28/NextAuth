import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/header/index'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next Auth App</title>
      </Head>

      <Header />
    </>
  )
}

export default Home
