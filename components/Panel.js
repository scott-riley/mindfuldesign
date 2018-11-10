export default (props) => (
  <div className="panel">
    <div className="panelImg">
      <img src={props.image} />
    </div>
    <div className="panelContent">
      <span className="subTitle">Chapter {props.c}</span>
      <h2 className="panelTitle">{props.title}</h2>
      {props.children}
    </div>
    <div className="chapterNo">0{props.c}</div>
    <style jsx>{`
      .panel {
        background: white;
        border-radius: 5px;
        display: grid;
        grid-template-columns: 5fr 5fr;
        grid-gap: 60px;
        align-items: center;
        position: relative;
        box-shadow: 0 0 54px rgba(0,0,0,.2);
      }
      img {
        width: 100%;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        display: block;
      }
      .subTitle {
        color: #F655A8;
        font-family: skolar-sans-latin, sans-serif;
        font-weight: 900;
        font-style: italic;
        font-size: .8rem;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      h2 {
        margin-top: 0;
        padding-top: 0;
        font-size: 2.1rem;
        margin-bottom: 1rem;
        color: #2B3753;
      }
      .chapterNo {
        position: absolute;
        right: 20px;
        bottom: 20px;
        color: #F655A8;
        font-family: gastromond, serif;
        font-size: 3rem;
      }
      .panelContent :global(p) {
        padding-right: 20px;
      }
      @media(max-width: 720px) {
        .panel {
          display: block;
        }
        .panelContent {
          padding-left: 5vw;
          padding-right: 5vw;
          padding-bottom: 4rem;
          padding-top: 2rem;
        }
        h2 {
          font-size: 1.4rem;
        }
        .panelContent p {
          font-size: 1rem;
          max-width: 100%;
          padding-right: 0;
        }
        img {
          border-top-left-radius: 5px;
          border-bottom-left-radius: 0;
          border-top-right-radius: 5px;
        }
      }
      @media(max-width: 920px) {
        h2 {
          font-size: 1.7rem;
        }
        .panelContent :global(p) {
          font-size: .9rem;
        }
      }
    `}</style>
  </div>
)