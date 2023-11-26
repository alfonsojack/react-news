
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import './Article.css';

function Article({ onSearch, onCategoryClick }) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { sourceId } = useParams();
  const location = useLocation();

  const handleSearch = async (searchQuery) => {

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const startDate = thirtyDaysAgo.toISOString().split('T')[0];

    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchQuery}&from=${startDate}&language=en&sortBy=publishedAt&apiKey=6407e766ab484afd83a05c0442070e2b`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();


      console.log(data);

      const cleanedData = data.articles.filter(
        (article) =>
          article.content &&
          article.author &&
          article.urlToImage &&
          article.description &&
          !article.author.includes('<') &&
          !article.description.includes('<') &&
          !article.content.includes('<') &&
          article.source.id
      );
      

      onSearch(cleanedData);

  
      navigate(`/search/${searchQuery}`);
    } catch (error) {
      console.error('Error fetching data:', error);
      navigate(`/error/${error.message}`);
    }
  };

  useEffect(() => {
    const isSearchPath = /^\/search\/\w+/.test(location.pathname);
  
    if (isSearchPath) {

      const searchTerm = location.pathname.split('/').pop();
      handleSearch(searchTerm);
    }
  }, [location.pathname]);
  

  const handleCategoryClick = (categoryId) => {
    handleSearch(categoryId);
  };

  const handleSearchButtonClick = () => {
    handleSearch(searchQuery);
    navigate(`/search/${searchQuery}`);
    setSearchQuery('')
  };

  return (
    <aside className='filter'>
      <Link to='/' className='logo'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-news"><path className="logo-primary" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm2 3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7z"/><path className="logo-secondary" d="M7 14h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm7-8h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2zm0 4h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2z"/></svg>
        <h1 className='site-title'>React News</h1>
      </Link>
      <div className='search-container'>
        <input
          className='search'
          type='text'
          id='searchInput'
          placeholder='Search stories'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className='search-button' onClick={handleSearchButtonClick}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-search"><circle cx="10" cy="10" r="7" className="primary"/><path className="search-secondary" d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg></button>
      </div>
      <div className='filter-container'>
        <p className='filter-title'>Categories</p>
        <NavLink to='/' className='category' id={location.pathname === '/' ? 'active' : ''}>Top Stories</NavLink>
        <NavLink to='/search/business' className='category' id={location.pathname === '/search/business' ? 'active' : ''}>Business</NavLink>
        <NavLink to='/search/technology' className='category' id={location.pathname === '/search/technology' ? 'active' : ''}>Technology</NavLink>
        <NavLink to='/search/sports' className='category'  id={location.pathname === '/search/sports' ? 'active' : ''}>Sports</NavLink>
        <NavLink to='/search/music' className='category'  id={location.pathname === '/search/music' ? 'active' : ''}>Music</NavLink>
        <NavLink to='/search/movies' className='category'  id={location.pathname === '/search/movies' ? 'active' : ''}>Art</NavLink>
      </div>
    </aside>
  );
}

export default Article;
