import React from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
    
          <Tooltip />
          
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
