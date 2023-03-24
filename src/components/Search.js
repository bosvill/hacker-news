import React from 'react'
import searchImg from '../searchImg.png'
import Filter from './Filter'

const Search = ({
	searchQuery,
	setSearchQuery,
	type,
	setType,
	dateRange,
	setDateRange,
	sort,
	setSort,
	applyFilter
}) => {
	const changeQuery = e => {
		setSearchQuery(e.target.value)
	}

	return (
		<div className='searchForm'>
			<div className='filter'>
				<span>Search</span>
				<Filter
					value={type}
					onChange={value => setType(value)}
					//defaultValue='Story'
					options={[
						{ value: 'story', name: 'Story' },
						{ value: 'story,comment', name: 'All' },
						{ value: 'comment', name: 'Comment' }
					]}
				/>
				<span>By</span>
				<Filter
					value={sort}
					onChange={value => setSort(value)}
					//defaultValue='Date'
					options={[
						{ value: '', name: 'Popularity' },
						{ value: '', name: 'Date' }
					]}
				/>
				<span>For</span>
				<Filter
					value={dateRange}
					onChange={value => setDateRange(value)}
					//defaultValue='All time'
					options={[
						{ value: 'search_by_date', name: 'All Time' },
						{
							value: '',
							name: 'Last 24h'
						},
						{ value: '', name: 'Past Week' },
						{ value: '', name: 'Past Month' },
						{ value: '', name: 'Past Year' }
					]}
				/>

				<button className='btn apply' onClick={applyFilter}>
					Apply
				</button>
			</div>
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
		</div>
	)
}

export default Search
