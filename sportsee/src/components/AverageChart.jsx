import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



function AverageSession ({data}) {
  function formatPolarAxis(value) {
    if(value === 1) return "L"
    if(value === 2) return "M"
    if(value === 3) return "M"
    if(value === 4) return "J"
    if(value === 5) return "V"
    if(value === 6) return "S"
    if(value === 7) return "D"
    return value
  }

    return (
      <ResponsiveContainer className="average-session">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeOpacity='0' />
          <XAxis dataKey="day" fontSize="14px" tickLine={false} axisLine={false} tickFormatter={formatPolarAxis}  stroke='white' />
    
          <Tooltip />
          
          <Line type="monotone" dataKey="sessionLength" stroke="whitesmoke" activeDot={{ r: 7 }} />
          
        </LineChart>
      </ResponsiveContainer>
    )
}
export default AverageSession
