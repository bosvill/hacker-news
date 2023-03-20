import React from 'react'
const footerLinks = [
	'Guidelines',
	'FAQ',
	'List',
	'API',
	'Security',
	'Legal',
	'Apply to YC',
	'Contact'
]
const Footer = () => {
	return (
		<footer className='footer'>
			<ul className='list'>
				{footerLinks.map(link => (
					<li className='navlink'>{link}</li>
				))}
			</ul>
		</footer>
	)
}

export default Footer
