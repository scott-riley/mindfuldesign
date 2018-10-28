import Head from 'next/head'
import Header from './Header'
import GlobalStyles from './GlobalStyles'

const Layout = (props) => (
  <div>
    <Head>
      <link rel="stylesheet" href="https://use.typekit.net/wjd0jax.css" />
    </Head>
    <Header />
    {props.children}
    <GlobalStyles />
  </div>
)

export default Layout