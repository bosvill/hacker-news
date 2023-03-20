import React from 'react'
import logo from '../logo.png'

const navlinks = ['new', 'past', 'comment', 'ask', 'show', 'jobs', 'submit']

const Navbar = () => {
	return (
		<header className='header'>
			<img className='logo' src={logo} />
			<h3>Hacker News</h3>
			<ul className='list'>
				{navlinks.map(link => (
					<li className='navlink'>{link}</li>
				))}
			</ul>
			<button className='btn'>login</button>
		</header>
	)
}

export default Navbar
