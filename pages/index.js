
import Layout from '../components/Layout.js'
import Illo from '../components/Illo.js'
import Panel from '../components/Panel'
import SVG from 'react-inlinesvg'
//
import Head from 'next/head'

export default () => (
	<Layout>
		<Head>
			<title>Mindful Design ~ A Book About Design And The Brain</title>
		</Head>
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
						Chapter 1 is all about how our brain regulates our attention, the cost of distractions, and some of the amazing (and plenty of the not-so-amazing) ways we simplify the world around us. We'll examine tech's rather damaging fetishisation of attention, and how we can use an understanding of our attentional systems to work alongside human focus, rather than striving to constantly interrupt it.
					</p>
				</Panel>
				<Panel
					title="Vision, Perception & Aesthetics"
					c="2"
					image="/static/ch2.jpg"
				>
					<p>
						Chapter 2 focusses on how we perceive the world, with particular focus on our visual perception. This chapter delves into the ways in which our brains parse discrete stimuli into coherent objects and concepts. We'll look at how adept the brain is at grouping and codifying visual information, and how we can use this knowledge when laying out, styling and animating our interfaces.
					</p>
				</Panel>
				<Panel
					title="Learning & Memory"
					c="3"
					image="/static/ch3.jpg"
				>
					<p>
						Chapter 3 revolves around the myriad ways we learn and practice things, from memorising information to repeating and practicing complex motor skills. We'll explore the difference between educational interfaces and learnable interfaces, examine learning as a process of bridging gaps in mental models, and look at how we can implement this when teaching people about the concepts and features underpinning our systems.
					</p>
				</Panel>
				<Panel
					title="Harmony & Dissonance"
					c="4"
					image="/static/ch1.jpg"
				>
					<p>
						Chapter 4 explores the world of musical harmony and dissonance and offers parallels to interaction design. We'll attempt to unravel the mysterious allure of dissonance, explore the joy that can be found in surprise and schematic violation. We'll take the examples set by music, video games and movies&mdash;as compelling forms of progressive media&mdash;and explore the impact of using time and progression as compositional tools when designing interactions.
					</p>
				</Panel>
				<Panel
					title="Reward & Motiviation"
					c="5"
					image="/static/ch1.jpg"
				>
					<p>
						Chapter 5 examines what I believe to be tech's most controversial application of brain science&mdash;our response to reward and motivation. We'll look at how the reductionist, behaviourist concepts behind persuasive design do a disservice to almost everyone, and delve into some often-overlooked theories behind intrinsic motivation that offer us respite from the incessant chasing of addictive products. We'll explore how treating humans like humans is&mdash;you know&mdash;A Good Thing.
					</p>
				</Panel>
			</div>
			<div className="partTwo">
				<div className="twoWrapper">
					<h2>Part Two: Implementation &amp; Ethics</h2>
					<p>
						In the second half of the book, we'll look at how we can responsively and ethically apply this knowledge across our design processes. 
						Part two is intended to provide a clear means of integrating these concepts into already-existing design processes, without requiring an entire upheaval or some bullshit twelve-step framework for design sprints. 
					</p>
					<p>
						We'll look at how our research and testing phases can help ensure we're exploring diverse and complex problem spaces rather than a naive singular problem; 
						investigate how thinking in terms of systems and state can lead to more open, explorable products&mdash;and why doing so is condusive to self-determinism and intrinsic motivation; 
						look at how we can take artefacts such as user personas, user journey maps and storyboards and ensure that they're more representative, more compassionate, and more <em>useful</em> to modern design processes; 
						and examine the underlying anatomy of the interactions we design.
					</p>
					<p>
						Perhaps most importantly, though, we'll look at how we can do all of this through a lens of compassion and humility. 
						We'll question how we can fight the onrushing tide of late-stage tech capitalism and start bringing design towards a position where it democratises&mdash;where it refuses to oppress. We'll examine how losing touch with humanity has led design and technology down a path where it empowers fascists, where it allows for untempered marginalisation, and how we can at least try to not let that happen on our watch. 
						This is no doom-and-gloom psycho-novella where we take it in turns to shout about how fucked everything is, but it's also a refusal to be milquetoast about the current state of technology. 
						If you're disenfranchised with what design is currently enabling, my goal is that this book gives you the tools, knowledge and empowerment to at least elucidate that. 
						If you just want a deep dive into many of the areas of cognitive psychology and neuroscience that impact our work, then cool, that's there too.
					</p>
				</div>
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
			@keyframes heroItem {
				to {
					opacity: 1;
					transform: translateY(0);
				}
			}
			.heroImg {
				animation: heroItem .85s ease-out forwards;
				opacity: 0;
				transform: translateY(-60px);
				animation-delay: .7s;
			}
			.heroContent {
				animation: heroItem .85s ease-out forwards;
				transform: translateY(60px);
				opacity: 0;
				animation-delay: .7s;
			}
			h1 {
				color: white;
				font-size: 3.25rem;
				margin-bottom: .5rem;
				text-shadow: 0 4px 0 rgba(0,0,0,.2);
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
				animation: heroItem .85s ease-out forwards;
				transform: translateY(-60px);
				opacity: 0;
				animation-delay: 1.2s;
			}
			.cta img {
				margin-left: .5rem;
				height: .5rem;
			}
			.learn {
				max-width: 970px;
				margin: auto;
				padding-top: 7rem;
				position: relative;
				z-index: 1;
			}
			.learn :global(.panel) {
				margin-bottom: 7rem;
			}
			.partTwo {
				padding-top: 0;
				background-color: white;
				padding-bottom: 40vh;
				position: relative;
				z-index: 0;
				text-align: center;
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
			}
			.twoWrapper h2 {
				font-size: 2.8rem;
			}
			.partTwo p {
				text-align: left;
				max-width: 620px;
				font-size: 1.2rem;
				line-height: 1.55;
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