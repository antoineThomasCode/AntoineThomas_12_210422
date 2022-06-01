import React from 'react';
import { LineChart, Line, XAxis, Legend, CartesianGrid, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';

import PropTypes from 'prop-types';
/**
 * 
 * @param {number} value (number between 1 and 7)
 * @returns string --> Day of the week 
 */
function formatPolarAxis(value = 0) {
  if(value === 0) return "N/A"
  if(value === 1) return "L"
  if(value === 2) return "M"
  if(value === 3) return "M"
  if(value === 4) return "J"
  if(value === 5) return "V"
  if(value === 6) return "S"
  if(value === 7) return "D"
  return value
}
function CustomCursor(props) {
  if (props) {
    const { points } = props;
    const { x, y } = points[0];

    // console.log("props", x,y,width,height);
    return (
      <Rectangle
        fill={'red'}
        x={x}
        y={y - 30}
        width={20}
        height={20}
      />
    );
  }
  return <div>... waiting for data</div>;
}

function CustomTooltip({ payload }) {
  if (payload && payload.length) {
    return (
      <div
      className="custom-tooltip"
      style={{ background: "white", padding: "1px 5px" }}
      >
        <p className="desc">{payload[0].payload.sessionLength} min</p>
      </div>
    );
  }
  return <div>... en attente des donées </div>
}
/**
 * 
 * @param {session} waiting an object from API or mocked data to create a chart width RECHARTS
 * @returns component 
 */
function AverageSession ({session}) {

    return (
      <ResponsiveContainer className="average-session">
        <LineChart
          width={500}
          height={300}
          data={session}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeOpacity='0' />
          <XAxis dataKey="day" fontSize="14px" tickLine={false} axisLine={false} tickFormatter={formatPolarAxis}  stroke='white' />
          <Legend
							verticalAlign="top"
							align="left"
							iconSize={0}
							content={() => (
								<div
									className="legend_text"
									style={{
										color: "white",
										marginTop: "-10px",
										marginLeft: "20px",
										opacity: ".5",
										position: "absolute",
                    fontSize: "10px",
										top: "0",
									}}
								>
									Durée moyenne des
									<br />
									sessions
								</div>
							)}
							margin={{ left: 20 }}
						/>
          <Tooltip
							content={<CustomTooltip />}
							animationEasing="ease-out"
							cursor={<CustomCursor />}
						/>
          
          <Line type="monotone" dataKey="sessionLength" stroke="whitesmoke" activeDot={{ r: 7 }} />
          
        </LineChart>
      </ResponsiveContainer>
    )
    
}

AverageSession.propTypes = {
  session: PropTypes.arrayOf(PropTypes.shape({
      day: PropTypes.number,
      sessionLength: PropTypes.number
  }))
}

export default AverageSession
