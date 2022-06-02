import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import PropTypes from 'prop-types';
/**
 * 
 * @param {object} data 
 * @returns component
 */
function Performance ({data}) {
    
    function formatPolarAxis(value) {
        if(value === 1) return "Intensité"
        if(value === 2) return "Vitesse"
        if(value === 3) return "Force"
        if(value === 4) return "Endurance"
        if(value === 5) return "Energie"
        if(value === 6) return "Cardio"
        return value
      }
      
    return (
      <ResponsiveContainer className='perf-graph'>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="white" />
          <PolarAngleAxis dataKey="kind" tickFormatter={formatPolarAxis} stroke="white" fontSize="8px"  />
          <PolarRadiusAxis stroke="transparent" fill="transparent"/>
          <Radar  dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    )
}
export default Performance

Performance.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.number
  }))
}