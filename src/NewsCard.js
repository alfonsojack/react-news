import './NewsCard.css'
import { useState } from 'react'
import { Routes, Route, NavLink, Link } from 'react-router-dom';

function NewsCard ({ story }) {
  console.log('story', story)
  
  return (
    <Link to='/article' className='NewsCard'>
      <p>{story.source.name}</p>
      <p>{story.title}</p>
      <img className="story-image" src={story.urlToImage} />
    </Link>
  )
}

export default NewsCard