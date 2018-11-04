export default () => (
  <style jsx global>{`
    * {
      box-sizing: border-box;
    }
    #__next {
      overflow-x: hidden;
    }
    html {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }
    body {
      background: #80E0A7;
      font-family: skolar-sans-latin, sans-serif;
      font-weight: 300;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      width: 100%;
    }
    h1, h2, h3 {
      font-family: gastromond, serif; 
    }
    p {
      color: #3D4859;
    }
    .button {
      padding: 1rem;
      background: black;
      border-radius: 4px;
      color: #BEFFD8;
      text-decoration: none;
      font-family: gastromond, serif;
      font-size: 1.2rem;
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
      animation: dash 9.3s ease forwards;
      opacity: 0;
      animation-delay: 1.3s;
    }
    [id^=leftTree] {
      transform: translateY(-90px);
      animation: hi .7s cubic-bezier(0.410, -0.600, 0.450, 1.295) forwards;
      animation-delay: .8s;
    }
    #rightTree {
      transform: translateY(90px);
      animation: hi .7s cubic-bezier(0.410, -0.600, 0.450, 1.995) forwards;
      animation-delay: .8s;
    }
  `}</style>
)