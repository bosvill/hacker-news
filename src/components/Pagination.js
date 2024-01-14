import React from 'react'

const Pagination = ({ currentPage, setCurrentPage }) => {
	const goBack = () => {
		if (currentPage===1) return
		setCurrentPage(prev => prev - 1)
	}

	const goNext = () => {
		if (currentPage === 50) return
		setCurrentPage(prev => prev + 1)
	}
	console.log('Current Page: ' + currentPage)
	return (
		<nav className='pagination'>
			<ul>
				<button onClick={goBack} className='btn'>
					Back
				</button>
				<button className='btn'>{currentPage}</button>
				<button onClick={goNext} className='btn'>
					Next
				</button>
			</ul>
		</nav>
	)
}

export default Pagination
