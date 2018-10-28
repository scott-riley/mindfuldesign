export default (props) => (
  <div className="panel">
    <div className="panelImg">
      <img src={props.image} />
    </div>
    <div className="panelContent">
      <span className="subTitle">Chapter {props.c}</span>
      <h2 className="panelTitle">{props.title}</h2>
      <p>{props.children}</p>
    </div>
    <div className="chapterNo">0{props.c}</div>
    <style jsx>{`
      .panel {
        background: white;
        border-radius: 5px;
        display: grid;
        grid-template-columns: 4fr 5fr;
        grid-gap: 60px;
        align-items: center;
        position: relative;
        padding-right: 40px;
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
      }
      .chapterNo {
        position: absolute;
        right: 20px;
        bottom: 20px;
        color: #F655A8;
        font-family: gastromond, serif;
        font-size: 3rem;
      }
    `}</style>
  </div>
)