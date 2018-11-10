import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div className="mainHeader">
    <nav>
      <Link href="/">
        <a className="logo">Mindful Design</a>
      </Link>
      <ul className="links">
        <li>
          <a className="button" href="https://geni.us/mindful">Pre-order</a>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      .mainHeader {
        position: fixed;
        top: 0;
        width: 100vw;
        box-shadow: 0 2px 3px rgba(0,0,0,.12);
        background: linear-gradient(to right, #80E0A7, #2BC0C4);
        z-index: 999;
        padding-bottom: .5rem;
        display: flex;
        align-items: center;
      }
      nav {
        max-width: 1020px;
        margin: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        width: 90vw;
      }
      .links {
        display: flex;
        justify-content: flex-end;
        list-style: none;
        padding-left: 0;
        align-items: center;
        padding-top: .3rem;
      }
      .links li {
        margin-left: 20px;
        font-family: skolar-sans-latin-compressed, sans-serif;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: .8rem;
      }
      .logo {
        font-family: gastromond, serif;
        font-size: 1.4rem;
        text-decoration: none;
        color: white;
        text-shadow: 1px 2px 0 rgba(0,0,0,.22);
      }
      .logo:hover {
        color: black;
        text-shadow: none;
      }
      .button {
        font-family: skolar-sans-latin, sans-serif;
        font-weight: 900;
        letter-spacing: 2px;
        color: black;
        padding: .4rem .8rem;
        font-size: .8rem;
        background: white;
        box-shadow: 2px 2px 0 rgba(0,0,0,.22);
        line-height: 0;
        margin-top: .2rem;
      }
    `}</style>
  </div>
)

export default Header