import React from "react";
import { Grid } from "semantic-ui-react";
import { PolarArea, Bar } from "react-chartjs-2";

function PayeeChart({ id, data }) {
	let total = 0;
	const labels = data[id].Remittance.map(function (e) {
		return e.PayorName;
	});

	const figures = data[id].Remittance.map(function (e) {
		let number = Number(e.Amount.replace(/[^0-9\.-]+/g, ""));
		total = total + number;
		return number;
	});

	let delayed;
	const chartData = {
		labels: labels,
		datasets: [
			{
				label: "Amount",
				data: figures,
				backgroundColor: [
					"hsl(320, 50%, 70%, 0.6)",
					"hsl(320, 50%, 60%, 0.6)",
					"hsl(320, 50%, 50%, 0.6)",
					"hsl(320, 50%, 40%, 0.6)",
					"hsl(320, 50%, 30%, 0.6)",
					"hsl(320, 50%, 20%, 0.6)",
				],
				borderWidth: 0,
			},
		],
	};

	return (
		<>
			<Grid.Column>
				<div style={{ float: "left", padding: "15px 0 0 0", width: "40%"}}>
					<PolarArea
						data={chartData}
						options={{
							plugins: {
								legend: {
									display: false,
								},
							},
							responsive: true,
							maintainAspectRatio: false,
							animation: {
								onComplete: () => {
									delayed = true;
								},
								delay: (context) => {
									let delay = 0;
									if (
										context.type === "data" &&
										context.mode === "default" &&
										!delayed
									) {
										delay =
											context.dataIndex * 200 + context.datasetIndex * 100;
									}
									return delay;
								},
							},
						}}
					/>
				</div>
			</Grid.Column>
			<Grid.Column>
				<div style={{ overflow: "auto", padding: "15px 0 0 0" }}>
					<Bar
						data={chartData}
						options={{
							plugins: {
								legend: {
									display: false,
								},
							},
							responsive: true,
							maintainAspectRatio: false,
							animation: {
								onComplete: () => {
									delayed = true;
								},
								delay: (context) => {
									let delay = 0;
									if (
										context.type === "data" &&
										context.mode === "default" &&
										!delayed
									) {
										delay =
											context.dataIndex * 400 + context.datasetIndex * 100;
									}
									return delay;
								},
							},
						}}
					/>
				</div>
			</Grid.Column>
			<Grid.Row>
				<Grid.Column>
					<h3 style={{ margin: "10px 0 0 0" }}>
						Total: <span style={{ color: "#c60177" }}>${total.toFixed(2)}</span>
					</h3>
					<h3 style={{ margin: "0 0 5px 0" }}>
						Submission Date: {data[id].Payee.SubmissionDate}
					</h3>
				</Grid.Column>
			</Grid.Row>
		</>
	);
}

export default PayeeChart;
