import './NewsFeed.css'
import { useState, useEffect } from 'react'
import NewsCard from './NewsCard'

function NewsFeed () {
const [stories, setStories] = useState([]);
const [selectedStory, setSelectedStory] = useState(null);

const handleNewsCardClick = (story) => {
  setSelectedStory(story);
};

const getTopStories = () => {
  return fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=6407e766ab484afd83a05c0442070e2b`)
    .then(response => {
      if (response.status === 500) {
        throw new Error('No stories found');
      }
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.message}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('news data', data.articles);

      const cleanedData = data.articles.filter(article =>
        article.content && article.author && article.urlToImage && article.description
      );

      setStories(cleanedData);
    })
    .catch(error => {
      console.error('Error:', error);
    });
};



useEffect(() => {
  getTopStories()
}, [])



  return (
    <section>
      {selectedStory ? (
        <Article selectedStory={selectedStory} />
      ) : (
        stories.map((story, index) => (
          <NewsCard key={index} story={story} onClick={handleNewsCardClick} />
        ))
      )}
    </section>
  )
}

export default NewsFeed