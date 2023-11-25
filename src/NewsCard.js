import './NewsCard.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NewsCard({ story }) {
  const [moreInfo, setMoreInfo] = useState(false);
  const originalDate = new Date(story.publishedAt);
  const formattedDate = `${originalDate.getMonth() + 1}/${originalDate.getDate()}/${originalDate.getFullYear()}`;

  const handleSeeMoreClick = () => {
    setMoreInfo((prevValue) => !prevValue);
  };

  return (
    <div className={`NewsCard ${moreInfo ? 'expanded' : ''}`}>
      <div className='card-top'>
        <p>{formattedDate}</p>
        <p>{story.source.name}</p>
      </div>
      <h2 className='title'>{story.title.replace(/ -[^-]*$/, '')}</h2>
      <div className='image-container'>
        <img className='story-image' src={story.urlToImage} alt={story.title} />
        <div className='description-overlay'>
          <p className='description'>{story.description}</p>
        </div>
      </div>
      <p className='author'>{story.author}</p>
      <div>
        {!moreInfo ? (
          <button className='expand-btn' onClick={handleSeeMoreClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-cheveron-down">
              <path className="down-secondary" fillRule="evenodd" d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/>
            </svg>
          </button>
        ) : (
          <div className='expanded-view'>
            <p className='content'>{story.content.replace(/\[.*?\]/g, '')}</p>
            <Link className='read-more' to={story.url} target="_blank" rel="noopener noreferrer">
              [Read full article]
            </Link>
            <button className='expand-btn' onClick={handleSeeMoreClick}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-cheveron-down">
                <path className="down-secondary" fillRule="evenodd" d="M8.7 13.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 10.42l-3.3 3.3z"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsCard;
