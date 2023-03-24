import React from 'react'

import Article from './Article'

const Main = ({ data, searchQuery, setSearchQuery, isLoading }) => {
	return (
		<div className='main'>
			{/* <h1>Articles</h1> */}
			{isLoading && <p> Oops, just a sec, loading...</p>}
			{data && data.map(el => <Article el={el} key={el.created_at_i} />)}
		</div>
	)
}

export default Main
