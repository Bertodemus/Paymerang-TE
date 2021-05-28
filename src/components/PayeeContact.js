import React from "react";

function PayeeContact({ id, data }) {
	return (
		<div>
			<h1 style={{ margin: "0 0 0 0" }}>{data[id].Payee.Name}</h1>
			<hr></hr>
			<p style={{ color: "lightgray" }}>
				{data[id].Payee.Address.Address1}
				<br></br>
				{data[id].Payee.Address.City}, {data[id].Payee.Address.StateOrProvince},{" "}
				{data[id].Payee.Address.Country}, {data[id].Payee.Address.PostalCode}
			</p>
			<h3 style={{ margin: "0 0 0 0" }}>Contact:</h3>
			<p style={{ color: "lightgray" }}>
				{data[id].Payee.Attention}
				<br></br>Phone: {data[id].Payee.Phone}
				<br></br>Fax: {data[id].Payee.Fax}
			</p>
		</div>
	);
}

export default PayeeContact;
