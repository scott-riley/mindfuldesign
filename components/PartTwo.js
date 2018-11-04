import Feature from "./Feature";

export default () => (
  <div className="partTwo">

    <div className="twoWrapper">
      <h2>
        Implementation &amp; Ethics
      </h2>
      <p>
        In the second half of the book, we'll look at how we can responsively and ethically apply this knowledge across our design processes.
      </p>
      <div className="featureGrid">
        <Feature
          image="/static/research.svg"
          title="Research & Planning"
        >
          <p>
            We'll look into how we can use common, repeatable ethnographic research techniques to make sure we give our process the best possible start.
          </p>
        </Feature>
        <Feature
          image="/static/scribbling.svg"
          title="Scribbling & Sketching"
        >
          <p>
            We'll explore how we can ensure that our early stage design briefs and idea explorations such as thumbnails and wireframes can be made more mindful and compassionate.
          </p>
        </Feature>
        <Feature
          image="/static/testing.svg"
          title="Testing & Iterating"
        >
          <p>
            We'll take a look at how we can ensure that the testing we conduct—and the changes we make on the back of it—are representative and accommodating of the diverse people and attitudes that occupy our problem space.
          </p>
        </Feature>

        <Feature
          image="/static/diagrams.svg"
          title="Diagrams & Documentation"
        >
          <p>
            We'll take a look at how we can ensure that the testing we conduct—and the changes we make on the back of it—are representative and accommodating of the diverse people and attitudes that occupy our problem space.
          </p>
        </Feature>
        <Feature
          image="/static/interaction.svg"
          title="Interaction Anatomy"
        >
          <p>
            We'll unravel the moments and transitions that make up interactions—the building blocks of our interface work—and explore how we can apply our learnings from the previous chapters to our interactions.
          </p>
        </Feature>
        <Feature
          image="/static/ethical.svg"
          title="Ethical Considerations"
        >
          <p>
            We'll question how we can fight the onrushing tide of late-stage tech capitalism and start bringing design towards a position where it democratises—where it refuses to oppress.
          </p>
        </Feature>
      </div>
      <div className="twoCta">
        <a className="button" target="_blank" href="https://geni.us/mindful">
          Pre-order on Amazon
        </a>
      </div>
    </div>

    <style jsx>{`
      .partTwo {
				padding-top: 0;
				background-color: white;
				padding-bottom: 11vmax;
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
				max-width: 1220px;
				margin: auto;
        padding-top: 2rem;
        padding-left: 5vw;
        padding-right: 5vw;
      }
			.twoWrapper h2 {
        font-size: 2.2rem;
        text-align: center;
        color: #2B3753;
        margin-bottom: .6rem;
			}
			.twoWrapper > p {
				max-width: 620px;
				font-size: 1.2rem;
        line-height: 1.55;
        text-align: center;
        margin: auto;
        margin-bottom: 3rem;
        margin-top: 0;
      }
      .featureGrid {
        display: grid;
        grid-gap: 40px;
        grid-template-columns: 1fr 1fr 1fr;
      }
			.partTwo:before {
				background-image: url('/static/curve.svg');
				position: absolute;
				top: -11.5vmax;
				height: 30vmax;
				z-index: 1;
				background-repeat: no-repeat;
				background-position: top center;
				content: '';
				display: block;
				background-size: 100vw;
				width: 100vw;
			}
			.twoCta {
				text-align: center;
				padding-top: 6rem;
			}
			.twoCta a {
				color: white;
			}
			@media(max-width: 980px) {
				.partTwo:before {
					top: -11vmax;
				}
			}
			@media(max-width: 720px) {
				.partTwo {
					padding-left: 5vw;
					padding-right: 5vw;
				}
				.learn :global(.panel) {
					margin-bottom: 3rem;
				}
				.partTwo:before {
					top: -6vmax;
					left: 0;
					width: 100vw;
				}
				.partTwo h2 {
					font-size: 1.5rem;
				}
				.partTwo p {
					font-size: 1rem;
				}
			}
    `}</style>
  </div>
)