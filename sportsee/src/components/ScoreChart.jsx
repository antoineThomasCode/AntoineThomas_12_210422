import PropTypes from "prop-types";
import { PieChart, Pie, Legend, ResponsiveContainer } from "recharts";


function ScoreChart({ userScore, color }) {
	// Build modelData with the score of the user & (1 - userScore)
	const modelData = [
		{ name: "score", value: 1 - userScore, stroke: 'transparent' },
		{ name: "score", value: userScore, stroke: 'red' },
	];

	return (

			<ResponsiveContainer className='score-chart'>
				<PieChart margin={{ top: 10, bottom: 10 }}>
					<text
						dy="50%"
						dx="50%"
						textAnchor="middle"
						fill={color.dark_grey}
						style={{ fontSize: "24px" ,fontWeight: "bold"}}
					>
						{userScore * 100}%
					</text>
					<text
						dy="60%"
						dx="50%"
						textAnchor="middle"
						fill={color.grey}
					>
						de votre 
					</text>
					<text
						dy="70%"
						dx="50%"
						textAnchor="middle"
						fill={color.grey}
					>
						objectif
					</text>
					<Pie
						data={modelData}
						dataKey="value"
						nameKey="name"
						cx="50%"
						cy="50%"
						innerRadius="60%"
						outerRadius="60%"
						fill={color.red}
						strokeWidth={6}
						startAngle={180}
						endAngle={540}
					/>
					<Legend
						verticalAlign="top"
						align="left"
						content={(payload) => (
							<div
								className="legend_text"
								style={{
									color: "black",
									marginTop: "10px",
									marginLeft: "20px",
									opacity: "1",
									position: "absolute",
									top: "0",
								}}
							>
								{payload.payload[0].value[0].toUpperCase() +
									payload.payload[0].value.substring(1)}
							</div>
						)}
					/>
				</PieChart>
			</ResponsiveContainer>
	);
}
export default ScoreChart