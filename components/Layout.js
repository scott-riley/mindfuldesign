import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import GlobalStyles from './GlobalStyles'

const Layout = (props) => (
  <div>
    <Head>
      <link rel="stylesheet" href="https://use.typekit.net/wjd0jax.css" />
      <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86" />
      <meta property="og:title" content="Mindful Design ~ A Book About Design and the Brain" />
      <meta property="og:description" content="A book, a talk and a series of workshops designed to infuse your design process with the understanding and appreciation the human mind deserves." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://mindfuldesign.xyz/" />
      <meta property="og:image" content="http://mindfuldesign.xyz/static/ch5.png" />
    </Head>
    <Header />
    {props.children}
    <Footer />    
    <GlobalStyles />
  </div>
)

export default Layout