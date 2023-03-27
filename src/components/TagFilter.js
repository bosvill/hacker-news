import React from 'react'

const TagFilter = ({ sortByTag }) => {
	return (
		<select  defaultValue='' onChange={sortByTag} onClick={e => e.target.value = ''}>
			<option value=''  disabled>Type</option>
			<option  value='story'>Story</option>
			<option  value='comment'>Comment</option>
			<option  value='all'>All</option>
			
		</select>
	)
}

export default TagFilter
