import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Footer = () => (
  <div className="mainFooter">
    <nav>
      <div className="copy">
        <p>&copy; scott riley forever and ever</p>
      </div>
      <ul className="links">
        <li>By <a href="https://scott.is">Scott Riley</a> <b>/</b></li>
        <li>Book published by <a href="http://apress.com">Apress</a> <b>/</b></li>
        <li>Get on yer <a href="https://twitter.com/scott_riley">Twitter</a></li>
      </ul>
    </nav>
    <style jsx>{`
      .mainFooter {
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
        padding-bottom: .6rem;
        width: 92vw;
      }
      p {
        text-align: right;
      }
      a {
        color: black;
        font-weight: bold;
      }
      .links {
        display: flex;
        justify-content: flex-end;
      }
      .links li {
        margin-left: 20px;
        list-style: none;
        display: inline-block;
        margin-left: .2rem;
      }
      .links li :global(a) {
        color: black;
        text-decoration: underline;
        font-weight: bold;
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
          margin-left: 0;
          padding-left: 0;
          padding-top: .6rem;
        }
        .links li {
          display: block;
          margin-bottom: .4rem;
          margin-left: 0
        }
        .links li:first-child {
          margin-left: 0;
        }
        b {
          display: none;
        }
      }
    `}</style>
  </div>
)

export default Footer