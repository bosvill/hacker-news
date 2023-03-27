import React from 'react';

const TimeFilter = ({sortByTime}) => {
  return ( 
  <select defaultValue='Time' onChange={sortByTime} onClick={e => e.target.value=''}>
    <option value=''>All Time</option>
    <option value='24h'>24h</option>
    <option value='week'>Past Week</option>
    <option value='month'>Past Month</option>
    <option value='year'>Past Year</option>

  </select> );
}
 
export default TimeFilter;