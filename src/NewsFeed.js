import './NewsFeed.css'
import { useState, useEffect } from 'react'
import NewsCard from './NewsCard'
import Article from './Article';

function NewsFeed ({ stories }) {

  console.log('testing', stories)




  return (
    <section >
      <div className='NewsFeed'>
        {stories.map((story, index) => (
          <NewsCard key={index} story={story} />
        ))
        }
      </div>
    </section>
  )
}

export default NewsFeed