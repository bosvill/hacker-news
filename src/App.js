import './App.css'
import React, { useState, useEffect } from 'react'
import fetchData from './api.js'
import New from './components/New'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Search from './components/Search'

export default function App() {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [searchQuery, setSearchQuery] = useState('search?query=')
	const [searchInput, setSearchInput] = useState('')
	const [highlight, setHighlight] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)

	useEffect(() => {
		setIsLoading(true)
		const endpoint = `http://hn.algolia.com/api/v1/` + searchQuery + `&page=${currentPage - 1}`
		fetchData(endpoint).then(data => {
			console.log(data)
			console.log(data.page)
			setCurrentPage(data.page + 1)
			setData(data.hits)
			console.log(endpoint)

			setIsLoading(false)
		})

	}, [searchQuery, currentPage])

	return (
		<div className='App'>
			<Navbar />
			<Search
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				searchInput={searchInput}
				setSearchInput={setSearchInput}
				setHighlight={setHighlight}
			/>
			<New
				data={data}
				isLoading={isLoading}
				highlight={highlight}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
			<Footer />
		</div>
	)
}
