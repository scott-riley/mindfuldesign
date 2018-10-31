export default () => (
  <style jsx global>{`
    * {
      box-sizing: border-box;
    }
    body {
      background: #80E0A7;
      font-family: skolar-sans-latin, sans-serif;
      font-weight: 300;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }
    h1, h2, h3 {
      font-family: gastromond, serif; 
    }
    @keyframes dash {
      1% {
        opacity: 1;
      }
      100% {
        stroke-dashoffset: 0;
        opacity: 1;
      }
    }
    @keyframes hi {
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
    [id^=scribbles] * {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      animation: dash 10s linear forwards;
      opacity: 0;
      animation-delay: 2s;
    }
    [id^=leftTree] {
      transform: translateY(-40px);
      opacity: 0;
      animation: hi .7s ease-out forwards;
      animation-delay: 1s;
    }
    [id^=rightTree___] {
      transform: translateY(40px);
      opacity: 0;
      animation: hi .7s ease-out forwards;
      animation-delay: 1s;
    }
  `}</style>
)