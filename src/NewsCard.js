import './NewsCard.css'
import { useState } from 'react'
import { Routes, Route, NavLink, Link } from 'react-router-dom';

function NewsCard ({ story, onClick }) {
  console.log('story', story)
  const handleClick = () => {
    onClick(story);
  };

  
  return (
    <div className='NewsCard' onClick={handleClick}>
      <p>{story.source.name}</p>
      <p>{story.title}</p>
      <img className="story-image" src={story.urlToImage} />
    </div>
  )
}

export default NewsCard