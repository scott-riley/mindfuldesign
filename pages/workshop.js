
import Layout from '../components/Layout.js'
import Illo from '../components/Illo.js'
import Panel from '../components/Panel'
import SVG from 'react-inlinesvg'
//
import Head from 'next/head'

export default () => (
	<Layout>
		<Head>
			<title>Mindful Design ~ Workshops</title>
		</Head>
		<main className="homepage">
			<div className="partTwo">
				<div className="twoWrapper">
					<h2>The Workshop: Coming 2019</h2>
					<p>
            The Mindful Design workshop will take a few formats depending on your company structure. Primarily it will be focussed on providing guided and explicit training to founders, design leaders 
						and small design teams who want a more bespoke means of implementing these principles into their process.
					</p>
					<p>
						While the pricing, contents and logistics of these workshops are still being ironed out, feel free to <a href="mailto:hugs@scott.is">drop me a line</a> if you're a socially conscious founder and want to guinea-pig a reduced-price, three-day course in early 2019.
					</p>
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