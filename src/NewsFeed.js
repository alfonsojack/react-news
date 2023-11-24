import './NewsFeed.css'
import { useState, useEffect } from 'react'
import NewsCard from './NewsCard'
import Article from './Article';

function NewsFeed () {
const [searchQuery, setSearchQuery] = useState('');
const [stories, setStories] = useState([]);


const handleSearch = async () => {
  // Calculate the date 30 days ago
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  // Format the date as 'YYYY-MM-DD'
  const startDate = thirtyDaysAgo.toISOString().split('T')[0];

  // Get the search query from your input or another source
  const searchQuery = document.getElementById('searchInput').value;

  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${searchQuery}&from=${startDate}&sortBy=publishedAt&apiKey=6407e766ab484afd83a05c0442070e2b`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Handle the response data as needed
    console.log(data);

    const cleanedData = data.articles.filter(article =>
      article.content && article.author && article.urlToImage && article.description
    );

    setStories(cleanedData);
  } catch (error) {
    // Handle errors
    console.error('Error fetching data:', error);
  }
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
      <div>
        <input
          type="text"
          id="searchInput"
          placeholder="Enter search query"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {stories.map((story, index) => (
          <NewsCard key={index} story={story} />
        ))
        }
      </div>
    </section>
  )
}

export default NewsFeed