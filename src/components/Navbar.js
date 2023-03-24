import React from 'react'
import logo from '../logo.png'

const navLinks = ['new', 'past', 'comment', 'ask', 'show', 'jobs', 'submit']

const Navbar = () => {
	return (
		<header className='header'>
			<img className='logo' src={logo} alt='logo' />
			<h3>Hacker News</h3>
			<ul className='list'>
				{navLinks.map(link => (
					<li key={navLinks.indexOf(link)} className='link'>
						{link}
					</li>
				))}
			</ul>
			<button className='btn'>login</button>
		</header>
	)
}

export default Navbar
