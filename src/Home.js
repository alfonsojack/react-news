import './Home.css'
import React, { useState, useEffect } from 'react';
import Article from './Article';
import NewsFeed from './NewsFeed';

function Home() {
  const [stories, setStories] = useState([]);

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
          article.content && article.author && article.urlToImage && article.description && !article.author.includes('<') && !article.author.includes('/')
        );
        console.log('hello', cleanedData)
        setStories(cleanedData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  useEffect(() => {
    getTopStories();
  }, []);

  const handleSearch = (newStories) => {
    setStories(newStories);
  };

  return (
    <section className='Home'>
      <Article onSearch={handleSearch} />
      <NewsFeed stories={stories} />
    </section>
  );
}

export default Home;
