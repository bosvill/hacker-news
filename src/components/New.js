import React from 'react'
import Article from './Article'
import Pagination from './Pagination'

const New = ({ data, isLoading, highlight,currentPage , setCurrentPage}) => {
	return (
		<main className='main'>
			{/* <h1>Articles</h1> */}
			{isLoading && <p> Oops, loading...</p>}
			{data && data.map(el => 
			<Article el={el} key={el.objectId} highlight={highlight}/>)}
			<Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
		</main>
	)
}

export default New
