import React from 'react'
import upvote from '../upvote.png'
import added from '../utils'

const Article = ({ el, highlight}) => {
 
const highlighted=el._highlightResult.title?.value
const newTitle = (`<h4>${highlighted}</h4>`)

	return (
		<article className='article'>
			<img className='upvote' src={upvote} alt='upvote' />
			{!highlight ?
			<h4 className='articleTitle'>  {el.title} </h4> : <hiv dangerouslySetInnerHTML={{ __html:newTitle}} /> }
			<div>
				<a className='articleLink' href={el.url}>{`(${el.url})`}</a>
			</div>
			<p>
				{`${el.points} points `}
				<span>|</span>
				{el.author}
				<span>|</span>
				{added(el.created_at)}
				<span>|</span>
				{` ${el.num_comments} comments `}
			</p>
		</article>
	)
}

export default Article

/* ( 
    <article key={el.id} className='article'>
                    <img className='upvote' src={upvote} alt='upvote' />
                    <p className='articleTitle'>{el.title}</p>
                    <p><a className='articleLink' href={el.url}>{`(${el.url})`}</a></p>
                    <p>
                        {`${el.points} points `}
                        <span>|</span>
                        {el.author}
                        <span>|</span>
                        {added(el.created_at)}
                        <span>|</span>
                        {` ${el.num_comments} comments `}
                    </p>
                </article>
 ); */
