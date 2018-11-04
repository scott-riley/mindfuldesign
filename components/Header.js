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
          <Link href="/">
            <a>
              The book
            </a>
          </Link>
        </li>
        <li>
          <Link href="/talk">
            <a>
              The talk
            </a>
          </Link>
        </li>
        <li>
          <Link href="/workshop">
            <a>
              The workshops
            </a>
          </Link>
        </li>
      </ul>
    </nav>
    <style jsx>{`
      .mainHeader {
        position: fixed;
        top: 0;
        width: 100vw;
        box-shadow: 0 2px 3px rgba(0,0,0,.12);
        background: linear-gradient(to right, #80E0A7, #5DDFB3);
        z-index: 999;
      }
      nav {
        max-width: 1020px;
        margin: auto;
        display: grid;
        grid-template-columns: 200px 1fr;
        align-items: center;
        width: 90vw;
      }
      .links {
        display: flex;
        justify-content: flex-end;
        list-style: none;
        padding-left: 0;
      }
      .links li {
        margin-left: 20px;
        font-family: skolar-sans-latin-compressed, sans-serif;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: .8rem;
      }
      .links li :global(a) {
        color: inherit;
        text-decoration: none;
      }
      .logo {
        font-family: gastromond, serif;
        font-size: 1.2rem;
        text-decoration: none;
        color: black;
      }
      .logo:hover {
        color: white;
        text-shadow: 1px 2px 0 rgba(0,0,0,.22);
      }
      @media(max-width: 680px) {
        .logo {
          margin-top: .5rem;
        }
        .mainHeader {
          display: block;
        }
        nav {
          display: block;
          text-align: center;
          padding-top: .4rem;
          padding-bottom: 0;
        }
        .links {
          display: block;
          background: rgba(255,255,255,.3);
          margin-bottom: 0;
          padding-bottom: .5rem;
        }
        .links li {
          display: inline-block;
          margin-bottom: 0;
          margin-left: 10vw;
        }
        .links li:first-child {
          margin-left: 0;
        }
      }
    `}</style>
  </div>
)

export default Header