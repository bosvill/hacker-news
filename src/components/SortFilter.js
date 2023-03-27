import React from 'react';

const SortFilter = ({sortBy}) => {
  return ( 
    <select defaultValue='Sort by' onChange={sortBy} onClick={e => e.target.value= ''}>
      <option value='' disabled >Sort by</option>
      <option value='date' name='date' >Date</option>
      <option value='popularity'name= 'popularity' >Popularity</option>
    </select>
   );
}
 
export default SortFilter;