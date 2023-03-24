import React from 'react'
import searchImg from '../searchImg.png'

const Search = ({ searchQuery, setSearchQuery }) => {
	const changeQuery = e => {
		setSearchQuery(e.target.value)
	}

	return (
		<form className='form'>
			<img src={searchImg} alt='search' />
			<input
				value={searchQuery}
				name='query'
				type='search'
				placeholder='search'
				onChange={changeQuery}
			/>
		</form>
	)
}

export default Search


