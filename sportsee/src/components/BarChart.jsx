import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


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
          <Tooltip />
          
          <Bar dataKey="kilogram" barSize={10} fill="#282D30"  />
          <Bar dataKey="calories" barSize={10} fill="#E60000" />
        </BarChart>
      </ResponsiveContainer>
    )
}
export default BarChartUser
