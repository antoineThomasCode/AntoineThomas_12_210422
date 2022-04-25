import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function  BarChartUser ({data}) {

    return (
        <ResponsiveContainer className='daily-graph'  width="30%" height="10%">
            
        <BarChart
          data={data}

       
         barSize={8}
         maxBarSize={300}
         barGap={8}
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
          <Bar dataKey="calories" barSize={10} fill="#E60000
" />
        </BarChart>
      </ResponsiveContainer>
    )
}
export default BarChartUser
