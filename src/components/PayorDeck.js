import React from "react";
import { Card, Statistic, Icon } from "semantic-ui-react";

function PayorDeck({ id, data }) {
	return (
		<>
			{data[id].Remittance.map((payor, index) => {
				let number = Number(payor.Amount.replace(/[^0-9\.-]+/g, ""));
				return (
					<Card raised fluid key={index}>
						<Card.Content>
							<Card.Header>{payor.PayorName}</Card.Header>
							<Card.Meta>
								<p>Payor</p>
                                <hr style={{ borderColor: 'rgb(230, 230, 230, 0.2)', margin: '0 0 1em 0'}}></hr>

							</Card.Meta>
							<Statistic.Group widths='3'>
								<Statistic>
									<Statistic.Value>{payor.PayorId}</Statistic.Value>
									<Statistic.Label><Icon name='inbox'/>ID</Statistic.Label>
								</Statistic>
								<Statistic>
									<Statistic.Value>{payor.InvoiceNo}</Statistic.Value>
									<Statistic.Label><Icon name='id badge outline'/>Invoice</Statistic.Label>
								</Statistic>
								<Statistic>
									<Statistic.Value
										style={{ color: "#c60177" }}
									>
										<Icon name='dollar' size='small'/>
										{number}
									</Statistic.Value>
									<Statistic.Label>Amount</Statistic.Label>
								</Statistic>
							</Statistic.Group>
						</Card.Content>
						<Card.Content extra>
							<Icon name='info circle' />
							{payor.Description}
						</Card.Content>
					</Card>
				);
			})}
		</>
	);
}

export default PayorDeck;
