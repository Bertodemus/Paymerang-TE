import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";

function Navigation() {
	return (
		<div>
			<Container
				style={{
					margin: "1em 0 1em 0",
				}}
			>
				<Grid container>
					<Grid.Row>
						<Grid.Column
							width={16}
							style={{
								padding: "0 0 0 0",
							}}
						>
							<Image src='../../images/logo.png' />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</div>
	);
}

export default Navigation;
