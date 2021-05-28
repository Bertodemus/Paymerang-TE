import React from "react";
import { Accordion } from "semantic-ui-react";

function PayeeCard({ id, data }) {
	const panels = [
		{
			key: "payment-info",
			title: "Payment information",
			content: {
				content: (
					<div style={{ padding: "0 0 15px 20px" }}>
						<p>
							PAN: {data[id].Payment.PAN}
							<br></br>
							CVV: {data[id].Payment.CVV}
							<br></br>
							Exp: {data[id].Payment.Exp}
							<br></br>
						</p>
					</div>
				),
			},
		},
	];

	return (
		<Accordion fluid panels={panels} style={{ backgroundColor: "#f2f2f2" }} />
	);
}

export default PayeeCard;
