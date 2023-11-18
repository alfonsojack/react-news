import './NewsFeed.css'
import { useState, useEffect } from 'react'
import NewsCard from './NewsCard'

function NewsFeed () {
const [stories, setStories] = useState([]) 

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
    console.log('news data', data.articles)
    return setStories(data.articles);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}


useEffect(() => {
  getTopStories()
}, [])



  return (
    <section>
      {stories.map((story, index) => 
        <NewsCard key={index} story={story}/>
      )}
    </section>
  )
}

export default NewsFeed