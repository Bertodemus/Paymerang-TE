import React from "react";
import { Container, Grid } from "semantic-ui-react";

function Foot() {
	return (
		<div>
			<Container
				style={{
					margin: "1em 0 1em 0",
				}}
			>
				<Grid container>
					<Grid.Row>
						<Grid.Column width='8' verticalAlign='middle'>
							<div style={{ float: "right" }}>
								<p>Designed by BERTO!</p>
							</div>
						</Grid.Column>
						<Grid.Column width='8'>
							<a
								href='https://berto.netlify.app/about'
								target='_blank'
								rel='noreferrer'
								alt="Berto's Website"
							>
								<img src='../../images/artlogo.png' alt='monster logo' />
							</a>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</div>
	);
}

export default Foot;
