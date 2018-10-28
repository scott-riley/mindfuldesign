
import Layout from '../components/Layout.js'
import Illo from '../components/Illo.js'
import Panel from '../components/Panel'
import SVG from 'react-inlinesvg'

export default () => (
	<Layout>
		<main className="homepage">
			<div className="hero">
				<div className="heroWrapper">
					<div className="heroImg">
						<SVG
							src={'/static/mindfulDesignFinal.svg'}
						/>
					</div>
					<div className="heroContent">
						<h1>Design for<br />Real Humans</h1>
						<p>
							A book, a talk and a series of workshops designed to infuse your design process with the understanding and appreciation the human mind deserves. If you want to start integrating into lifestyles instead of interrupting them, Mindful Design is for you.
						</p>
						<a className="button" target="_blank" href="https://geni.us/mindful">
							Pre-order the book
						</a>
					</div>
				</div>
				<div className="cta">
					<a href="/#learn">
						What You'll Learn
						<img role="presentation" alt="" src="/static/down-arrow.svg" />
					</a>
				</div>
			</div>
			<div className="learn" id="learn">
				<Panel
					title="Attention & Distraction"
					c="1"
					image="/static/ch1.jpg"
				>
					<p>
						A book, a talk and a series of workshops designed to infuse your design process with the understanding and appreciation the human mind deserves. If you want to start integrating into lifestyles instead of interrupting them, Mindful Design is for you.
					</p>
				</Panel>
				<Panel
					title="Vision, Perception & Aesthetics"
					c="2"
					image="/static/ch1.jpg"
				>
					<p>
						A book, a talk and a series of workshops designed to infuse your design process with the understanding and appreciation the human mind deserves. If you want to start integrating into lifestyles instead of interrupting them, Mindful Design is for you.
					</p>
				</Panel>
				<Panel
					title="Learning & Memory"
					c="3"
					image="/static/ch1.jpg"
				>
					<p>
						A book, a talk and a series of workshops designed to infuse your design process with the understanding and appreciation the human mind deserves. If you want to start integrating into lifestyles instead of interrupting them, Mindful Design is for you.
					</p>
				</Panel>
				<Panel
					title="Harmony & Dissonance"
					c="4"
					image="/static/ch1.jpg"
				>
					<p>
						A book, a talk and a series of workshops designed to infuse your design process with the understanding and appreciation the human mind deserves. If you want to start integrating into lifestyles instead of interrupting them, Mindful Design is for you.
					</p>
				</Panel>
				<Panel
					title="Reward & Motiviation"
					c="5"
					image="/static/ch1.jpg"
				>
					<p>
						A book, a talk and a series of workshops designed to infuse your design process with the understanding and appreciation the human mind deserves. If you want to start integrating into lifestyles instead of interrupting them, Mindful Design is for you.
					</p>
				</Panel>
			</div>
		</main>
		<style jsx>{`
			.hero {
				background: linear-gradient(-22deg, #80E0A7, #2BC0C4);
				box-shadow: 0 3px 57px rgba(0,0,0,.12);
				border-bottom-left-radius: 50%;
				border-bottom-right-radius: 50%;
				transform: scaleX(1.5);
				width: 100vw;
				background-repeat: no-repeat;
				position: relative;
				padding-top: 3rem;
			}
			.heroWrapper {
				transform: scaleX(.7);
				width: 100vw;
				margin: auto;
				max-width: 1440px;
				margin: auto;
				padding-top: 8rem;
				display: grid;
				grid-template-columns: 5fr 4fr;
				grid-gap: 7vw;
				align-items: center;
				padding: 8rem 5vw 10vh;
			}
			h1 {
				color: white;
				font-size: 3.25rem;
				margin-bottom: .5rem;
			}
			p {
				margin-top: 0;
				padding-right: 1rem;
				padding-bottom: 1.5rem;
				max-width: 420px;
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
			.cta {
				text-align: center;
				width: 100%;
				transform: scaleX(.7);				
			}
			.cta a {
				padding: 1rem 2rem;
				border-radius: 999px;
				font-family: skolar-sans-latin-compressed, sans-serif;
				background: black;
				color: #80E0A7;
				text-decoration: none;
				text-transform: uppercase;
				font-size: .8rem;
				margin-top: .2rem;
			}
			.cta img {
				margin-left: .5rem;
				height: .5rem;
			}
			.learn {
				max-width: 1080px;
				margin: auto;
				margin-top: 20vh;
				padding-bottom: 40vh;
			}
			.learn :global(.panel) {
				margin-bottom: 20rem;
			}
		`}</style>
	</Layout>
)