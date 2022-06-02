import { PieChart, Pie, Legend, ResponsiveContainer } from "recharts";

import PropTypes from 'prop-types';
/**
 * 
 * @param {number} userScore 
 * @returns component - scoreChart
 */
function ScoreChart({ userScore }) {
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
						fill={'black'}
						style={{ fontSize: "15px" ,fontWeight: "bold"}}
					>
						{userScore * 100}%
					</text>
					<text
						dy="60%"
						dx="50%"
						textAnchor="middle"
						fill={"grey"}
						style={{ fontSize: "10px" ,fontWeight: "bold"}}
					>
						de votre 
					</text>
					<text
						dy="70%"
						dx="50%"
						textAnchor="middle"
						fill={'grey'}
						style={{ fontSize: "10px" ,fontWeight: "bold"}}
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
						fill={'red'}
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
									marginLeft: "30px",
									opacity: "1",
									position: "absolute",
									fontSize: "10px", 
									top: "-20",
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

ScoreChart.propTypes = {
		userScore: PropTypes.number
  }