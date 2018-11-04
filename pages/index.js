
import Layout from '../components/Layout.js'
import PartTwo from '../components/PartTwo.js'
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
						<Illo />
					</div>
					<div className="heroContent">
						<h1>Design for<br />Real Humans</h1>
						<p>
							A book, a talk and a series of workshops designed to infuse your design process with the understanding and appreciation the human mind deserves. If you want to start integrating into lifestyles instead of interrupting them, Mindful Design is for you.
						</p>
						<a className="button" target="_blank" href="https://geni.us/mindful">
							Pre-order on Amazon
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
						Chapter 2 focuses on how we perceive the world, with particular focus on our visual perception. This chapter delves into the ways in which our brains parse discrete stimuli into coherent objects and concepts. We'll look at how adept the brain is at grouping and codifying visual information, and how we can use this knowledge when laying out, styling and animating our interfaces.
					</p>
				</Panel>
				<Panel
					title="Learning & Memory"
					c="3"
					image="/static/ch3.jpg"
				>
					<p>							
						Chapter 3 revolves around the myriad ways we learn and practice things, from memorising information to repeating and practicing complex motor skills. We'll explore the difference between educational interfaces and learnable interfaces and examine learning as a process of bridging gaps in mental models. We’ll also look at how we can implement this when teaching people about the concepts and features underpinning our systems.
					</p>
				</Panel>
				<Panel
					title="Harmony & Dissonance"
					c="4"
					image="/static/ch4.jpg"
				>
					<p>
						Chapter 4 explores the world of musical harmony and dissonance and offers parallels to interaction design. We'll attempt to unravel the mysterious allure of dissonance, explore the joy that can be found in surprise and schematic violation. We'll take the examples set by music, video games and movies—as compelling forms of progressive media—and explore the impact of using time and progression as compositional tools when designing interactions.
					</p>
				</Panel>
				<Panel
					title="Reward & Motiviation"
					c="5"
					image="/static/ch5.jpg"
				>
					<p>
						Chapter 5 examines what I believe to be tech's most controversial application of brain science—our response to reward and motivation. We'll look at how the reductionist, behaviourist concepts behind persuasive design do a disservice to almost everyone, and delve into some often-overlooked theories behind intrinsic motivation that offer us respite from the incessant chasing of addictive products. We'll explore how treating humans like humans is—you know—A Good Thing.
					</p>
				</Panel>
			</div>
			<PartTwo />
		</main>
		<style jsx>{`
			.homepage {
				width: 100vw;
				overflow-x: hidden;
			}
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
				animation: heroItem .65s ease-out forwards;
				opacity: 0;
				transform: translateY(-60px);
				animation-delay: .7s;
			}
			.heroImg svg {
				width: 100%;
			}
			.heroContent {
				animation: heroItem .65s ease-out forwards;
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
			.hero p {
				margin-top: 0;
				padding-right: 1rem;
				padding-bottom: 1.5rem;
				max-width: 420px;
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
			@media(max-width: 720px) {
				h1 {
					font-size: 2rem;
					text-shadow: 0 2px 0 rgba(0,0,0,.2);
				}
				.heroImg {
					grid-area: hi;
				}
				.heroContent {
					grid-area: hc;					
				}
			}
			@media(max-width: 720px) {
				.hero {
					transform: none;
					border-bottom-left-radius: 0;
					border-bottom-right-radius: 0;
				}
				.heroWrapper {
					grid-template-areas:
						"hi hi"
						"hc hc";
					padding-left: 10vw;
					padding-right: 10vw;
					padding-top: 4rem;
					transform: none;
				}
				.cta {
					transform: none;
				}
			}
			@media(max-width: 920px) {
				h1 {
					font-size: 2.2rem;
				}
			}
			.learn {
				max-width: 970px;
				margin: auto;
				padding-top: 7rem;
				position: relative;
				z-index: 1;
				width: 94vw;
			}
			.learn :global(.panel) {
				margin-bottom: 7rem;
			}
		`}</style>
	</Layout>
)