import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



function AverageSession ({data}){
  
    return (
      <ResponsiveContainer className='average-session'>
        <LineChart width={100} height={100} data={data}>
          <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    )
}
export default AverageSession