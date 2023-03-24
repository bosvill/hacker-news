import React from 'react'
import upvote from '../upvote.png'
import added from '../utils'

const Article = ({ el}) => {
	return (
		<article className='article'>
			<img className='upvote' src={upvote} alt='upvote' />
			<p className='articleTitle'>{el.title}</p>
			<p>
				<a className='articleLink' href={el.url}>{`(${el.url})`}</a>
			</p>
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
