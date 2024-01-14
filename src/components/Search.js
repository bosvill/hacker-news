import React from 'react'
import searchImg from '../searchImg.png'
import TagFilter from './TagFilter'
import search from './search.module.css' // separate conflicting styles for img
import SortFilter from './SortFilter'
import TimeFilter from './TimeFilter'

const Search = ({
	searchInput,
	setHighlight,
	setSearchQuery,
	setSearchInput
}) => {

	// Change from base url to search query
	const changeQuery = ({target})=>{
		const {value}=target
		console.log(value)
		const validInput= value.toLowerCase()
		setSearchInput(validInput)
		if(validInput.length > 1){
			setSearchQuery(`search?query=${value}&tags=story`)
			setHighlight(true)
		}
		
	}
	// Clear search input
	const handleReset = () =>{
    setSearchInput('');
    setSearchQuery('search?query=');
  }

	
 // Sort dropdow
	const sortBy = ({target}) => {
		const {value}=target
		
		if(value==='date'){
			setSearchQuery('search_by_date?tags=story')
			
		}
		if(value==='popularity'){
			setSearchQuery('search?tags=story&numericFilters=points>3000')
		}
		return target=''
		
	}
 // Type dropdown
	const sortByTag=({target})=>{
		const {value}=target
		if(value==='story'){
			setSearchQuery('search?tags=story')
		} else if(value==='comment'){
			setSearchQuery(`search?tags=comment`)//&numricFilters=comments>0 not working
		} else if(value==='all')setSearchQuery('search_by_date?tags=(story,poll)')

		return target=''
	}
	// Time dropdown, math not finished
	const sortByTime=({target})=>{
		const {value}=target
		const timestamp= new Date().getTime()/1000
		let timestampStart=timestamp
		let timestampEnd;
		if(value==='24h'){
			timestampStart= timestamp
			timestampEnd=timestamp - 86400
		} 
		if(value==='week'){
			timestampStart= timestamp -86400
			timestampEnd=timestampStart - 86400*7 
		} 
		if(value==='month'){
			timestampStart=86400*7 
			timestampEnd= timestampStart - 86400*7*30
		}
		if(value==='year'){
			timestampStart=86400*7 *30
			timestampEnd= timestampStart - 86400*7*30*12
		}
		setSearchQuery(`search_by_date?tags=story&numericFilters=created_at_i>${timestampEnd},created_at_i<${timestampStart}`)
		return target=''
	}

	
	

	return (
		<div className='searchContainer'>
			 <div  className='filter'> 
			 <TagFilter
					sortByTag={sortByTag}
				/>
				<SortFilter 
				sortBy={sortBy}
				/>
				<TimeFilter 
				sortByTime={sortByTime} />
				
			</div>
			<form className={search.form}>
			<img src={searchImg} alt='search' className={search.img}/>
				<input
					className={search.input}
					value={searchInput}
					name='query'
					search={searchInput}

					type='search'
					placeholder='search'
					onChange={changeQuery}
					onClick={handleReset}
				/>
			</form>
		</div>
	)
}

export default Search
