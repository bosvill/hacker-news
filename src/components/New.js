import React from 'react'
import Article from './Article'

const New = ({ data, isLoading, highlight }) => {
	return (
		<div className='main'>
			{/* <h1>Articles</h1> */}
			{isLoading && <p> Oops, loading...</p>}
			{data && data.map(el => 
			<Article el={el} key={el.objectId} highlight={highlight}/>)}
		</div>
	)
}

export default New
