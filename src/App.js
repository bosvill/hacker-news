import './App.css'
import React, { useState, useEffect } from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Search from './components/Search'

function App() {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [searchQuery, setSearchQuery] = useState('')

	const [type, setType] = useState('')
	const [dateRange, setDateRange] = useState('')
	const [sort, setSort] = useState('')

	let url = `http://hn.algolia.com/api/v1/search?query=${searchQuery}`

	useEffect(() => {
		setIsLoading(true)
		fetch(url)
			.then(response => {
				return response.json()
			})
			.then(data => {
				setData(data.hits)
				console.log(data)
				console.log(`http://hn.algolia.com/api/v1/search?${searchQuery}`)
				setIsLoading(false)
			})
	}, [url, searchQuery])

	const applyFilter = () => {}

	return (
		<div className='App'>
			<Navbar />
			<Search
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				type={type}
				setType={setType}
				dateRange={dateRange}
				setDateRange={setDateRange}
				sort={sort}
				setSort={setSort}
				applyFilter={applyFilter}
			/>
			<Main data={data} isLoading={isLoading} />
			<Footer />
		</div>
	)
}

export default App
