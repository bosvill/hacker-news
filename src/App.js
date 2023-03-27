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
	
	
	const urlBase= `http://hn.algolia.com/api/v1/`
	//const urlPath=`search?query=`

	useEffect(() => {
		setIsLoading(true)
		const endpoint = urlBase + searchQuery
		fetchData(endpoint)
		.then( data =>{
			setData(data.hits)
			console.log(endpoint)
			console.log(data)
			setIsLoading(false)
		})
	// eslint-disable-next-line 
	}, [searchQuery])

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
			<New data={data} isLoading={isLoading} highlight={highlight}/>
			<Footer />
		</div>
	)
}