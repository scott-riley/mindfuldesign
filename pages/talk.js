
import Layout from '../components/Layout.js'
import Illo from '../components/Illo.js'
import Panel from '../components/Panel'
import SVG from 'react-inlinesvg'
//
import Head from 'next/head'

export default () => (
	<Layout>
    <Head>
			<title>Mindful Design ~ Talks</title>
		</Head>
		<main className="homepage">
			<div className="partTwo">
				<div className="twoWrapper">
					<h2>The Talk: Coming 2019</h2>
					<p>
            If you're organising an event from January 2019 onwards, I'm working on a talk that encapsulates the key concepts of this book (without giving it all away cause fuck that I need the sales). 
            If you feel like your event could benefit from this, please <a href="mailto:hugs@scott.is">get in touch</a> and we can sort something out. 
            A few things up front:
					</p>
          <ul>
            <li>
              I have twenty-, thirty- and fifty-minute versions of this talk prepped, for all your temporal desires.
            </li>
            <li>
              This isn't going to be some bullshit self-promotion book tour talk where I just chat shit about how you can buy it for half an hour.
            </li>
            <li>
              I won't speak at events with a nondiverse lineup. If your speakers page looks like a top-down Unsplash photo of a can of tuna, nah, keep it.
            </li>
            <li>
              I won't speak at an event that's keynoted by yet another cis white dude.
            </li>
            <li>
              I won't speak at events that don't have an inclusion-focussed code of conduct and clear plans to enforce it.
            </li>
            <li>
              I probs can't make it rain free books, that's what my <a href="https://apress.com">publisher</a> is for.
            </li>
          </ul>
				</div>
			</div>
		</main>
		<style jsx>{`
			.partTwo {
				padding-top: 0;
				background-color: white;
				padding-bottom: 11vmax;
				position: relative;
				z-index: 0;
        text-align: center;
        margin-top: 20vmax;
			}
			.partTwo > * {
				position: relative;
				z-index: 2;
			}
			.twoWrapper {
				text-align: left;
				max-width: 620px;
				margin: auto;
        padding-top: 2rem;
        margin-top: -10vmax;
        min-height: 67.6vh;
			}
			.twoWrapper h2 {
				font-size: 2.8rem;
			}
      .partTwo p,
      .partTwo li {
				text-align: left;
				max-width: 620px;
				font-size: 1.2rem;
				line-height: 1.55;
      }
      .partTwo li {
        margin-bottom: 1rem;
      }      
			.partTwo:before {
				background-image: url('/static/curve.svg');
				position: absolute;
				top: -16vmax;
				height: 30vmax;
				z-index: 1;
				background-repeat: no-repeat;
				background-position: top center;
				content: '';
				display: block;
				background-size: 100vw;
				width: 100vw;
			}
		`}</style>
	</Layout>
)