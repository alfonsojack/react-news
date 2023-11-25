import React, { useState } from 'react';
import './Article.css'

function Article({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    // Calculate the date 30 days ago
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    // Format the date as 'YYYY-MM-DD'
    const startDate = thirtyDaysAgo.toISOString().split('T')[0];

    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchQuery}&from=${startDate}&language=en&sortBy=publishedAt&apiKey=6407e766ab484afd83a05c0442070e2b`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // Handle the response data as needed
      console.log(data);

      const cleanedData = data.articles.filter(
        (article) =>
          article.content &&
          article.author &&
          article.urlToImage &&
          article.description &&
          !article.author.includes('<')
      );

      // Call the onSearch function passed from the parent with the cleaned data
      onSearch(cleanedData);
    } catch (error) {
      // Handle errors
      console.error('Error fetching data:', error);
    }
  };

  return (
    <aside className='filter'>
      <div className='logo'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-news"><path className="logo-primary" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm2 3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7z"/><path className="logo-secondary" d="M7 14h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm7-8h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2zm0 4h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2z"/></svg>
        <h1>React News</h1>
      </div>
      <div className='search-container'>
        <input
          className='search'
          type='text'
          id='searchInput'
          placeholder='Search stories'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className='search-button' onClick={handleSearch}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-search"><circle cx="10" cy="10" r="7" className="primary"/><path className="secondary" d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg></button>
      </div>
    </aside>
  );
}

export default Article;
