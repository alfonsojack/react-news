import './NewsCard.css'
import { useState } from 'react'
import { Routes, Route, NavLink, Link } from 'react-router-dom';

function NewsCard ({ story }) {
  console.log('story', story);
  const [moreInfo, setMoreInfo] = useState(false);
  const originalDate = new Date(story.publishedAt);
  const formattedDate = `${originalDate.getMonth() + 1}/${originalDate.getDate()}/${originalDate.getFullYear()}`;

console.log(formattedDate);

  const handleSeeMoreClick = () => {
    setMoreInfo((prevValue) => !prevValue);
  };
  
  return (
    <div className='NewsCard' >
      <p>{formattedDate}</p>
      <p>{story.source.name}</p>
      <p>{story.title}</p>
      <img className="story-image" src={story.urlToImage} />
      <p>{story.description}</p>
      <div>
        {!moreInfo ? (
          <button onClick={handleSeeMoreClick}>Expand</button>
        ) :
          <div>
            <p>{story.author}</p>
            <p>{story.content.replace(/\[.*?\]/g, '')}<Link to={story.url} target="_blank" rel="noopener noreferrer">
        [Read full article]
      </Link></p>
            <button onClick={handleSeeMoreClick}>Minimize</button>
          </div>
        }
      </div>
    </div>
  )
}

export default NewsCard