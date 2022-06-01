import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer } from 'recharts';

function setLegend(text) {
  const types = {
    kilogram: "Poids (kg)",
    calories: "Calories brûlées (kCal)",
  };
  return (
    <span>
      <span
        className="legend_text"
        style={{
          position: "absolute",
          left: "0",
          color: '#20253A',
          padding: '20px'
        }}
      >
        Activité quotidienne
      </span>
      <span className="recharts-legend-item-text dark_grey"
      style={{
        position: "relative",
        left: "0"
      }}>
        {types[text]}
      </span>
    </span>
  );
}

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{ background: 'red', padding: "5px 5px", color: "white" }}
      >
        <p className="desc">{payload[0].payload.kilogram} Kg</p>
        <p className="desc">{payload[1].payload.calories} kCal</p>
      </div>
    );
  }
  return <div>... en attente des données</div>;
}

function  BarChartUser ({data}) {

    return (
    <ResponsiveContainer className='daily-graph'  width="100%" height="100%">
            
        <BarChart
         data={data}
         barSize={8}
         maxBarSize={300}
         barGap={8}
         margin={{
          top: 50,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        >
        <text x={20} y={-50} fill="#282D30"  fontSize={20} fontWeight={700} textAnchor="top-left" >
          Activité quotidienne
        </text>
          <CartesianGrid strokeDasharray="1" vertical={false} />
          <XAxis  />
          <YAxis dataKey="calories" hide={true}/>
          <YAxis yAxisId="right-axis" dx={10} axisLine={false} tickLine={false} tickCount={3} dataKey="kilogram" orientation="right" margin={20} stroke="#95a5a6" domain={[dataMax => (dataMax - 1), 'dataMax']} />
          <Legend
							verticalAlign="top"
							align="right"
							iconType="circle"
							iconSize={8}
              formatter={setLegend}
						/>
          <Tooltip
							content={<CustomTooltip />}
							animationEasing="ease-out"
							active
						/>
          <Bar dataKey="kilogram" barSize={10} fill="#282D30"  />
          <Bar dataKey="calories" barSize={10} fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    )
}
export default BarChartUser
