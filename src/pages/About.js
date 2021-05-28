import React, { useState } from "react";
import { Container, Icon, Pagination, Grid } from "semantic-ui-react";
import Sample from "../data/sample.json";
import PayeeContact from "../components/PayeeContact";
import PayeeChart from "../components/PayeeChart";
import PayeeCard from "../components/PayeeCard";
import PayorDeck from "../components/PayorDeck";

function About() {
	const [pageId, setPageId] = useState(0);

	return (
		<div>
			<Container>
				<Grid container stackable>
					<Grid.Row style={{ paddingBottom: "0" }}>
						<Grid.Column
							width='5'
							style={{
								color: "white",
								backgroundColor: "#4a7187",
								backgroundImage:
									"linear-gradient(to bottom left, #4a7187, #27404e)",
								borderRadius: "5px",
								padding: "1em",
							}}
						>
							<PayeeContact id={pageId} data={Sample} />
						</Grid.Column>
						<Grid.Column width='11'>
							<Grid.Row>
								<PayeeChart id={pageId} data={Sample} />
							</Grid.Row>
						</Grid.Column>
						<PayeeCard id={pageId} data={Sample} />
					</Grid.Row>
					<Grid.Row style={{ padding: "0 0 0 0" }}>
						<Grid.Column width={16} style={{ padding: "0 0 0 0" }}>
							<div style={{ textAlign: "center" }}>
								<Pagination
									size='tiny'
									defaultActivePage={1}
									ellipsisItem={{
										content: <Icon name='ellipsis horizontal' />,
										icon: true,
									}}
									firstItem={{
										content: <Icon name='angle double left' />,
										icon: true,
									}}
									lastItem={{
										content: <Icon name='angle double right' />,
										icon: true,
									}}
									prevItem={{ content: <Icon name='angle left' />, icon: true }}
									nextItem={{
										content: <Icon name='angle right' />,
										icon: true,
									}}
									totalPages={Sample.length}
									onPageChange={(e, data) => setPageId(data.activePage - 1)}
								/>
							</div>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width={16} style={{ padding: "0 0 0 0" }}>
							<PayorDeck id={pageId} data={Sample} />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</div>
	);
}

export default About;
