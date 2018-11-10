export default (props) => (
  <div className="feature">
    <header>
      <h2>
        <span className="icon">
          <img src={props.image} />
        </span>
        {props.title}
      </h2>
    </header>
    {props.children}
    <style jsx>{`
      h2 {
        font-size: 1.1rem;
        color: #2B3753;
        margin-bottom: 0;
      }
      .icon {
        width: 1em;
        display: block;
        margin-right: .4em;
      }
      .icon img {
        height: 24px;
        max-width: 24px;
        vertical-align: baseline;
      }
      .feature :global(p) {
        font-size: .9rem;
        margin-top: .5rem;
      }
    `}</style>
  </div>
)