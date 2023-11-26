import './ErrorPage.css'
import { Routes, Route, NavLink, Link } from 'react-router-dom';

function ErrorPage ({ message }) {
  return (
    <div className='page'>
      <h1 className='error-msg'>{message}</h1>
      <div>
        {message.includes('exist') ? (
          <div>
            <h2 className='error-sub'>Try going home</h2>
            {/* <div className='error-container'> */}
              <img className='error-img' src='https://t4.ftcdn.net/jpg/02/76/90/37/360_F_276903704_R5meF5b05TBX8BNyuy1siuqMDJwP6kMN.jpg'/>
              {/* <div className='error-overlay'></div>
            </div> */}
          </div>
        ) : (
          <div>
          <h2 className='error-sub'>Try going home or come back later if the problem persists</h2>
          <img className='error-img' src='https://us.123rf.com/450wm/lineartist/lineartist1907/lineartist190700815/127345150-dropping-a-letter-in-trash-bin-retro-postman-cartoon-courier-guy-vector-illustration.jpg?ver=6'/>
          </div>
        )
        }
      </div>
      <Link className='home-btn' to='/'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-home"><path className="home-primary" d="M9 22H5a1 1 0 0 1-1-1V11l8-8 8 8v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1zm3-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path className="home-secondary" d="M12.01 4.42l-8.3 8.3a1 1 0 1 1-1.42-1.41l9.02-9.02a1 1 0 0 1 1.41 0l8.99 9.02a1 1 0 0 1-1.42 1.41l-8.28-8.3z"/></svg>
      </Link>
    </div>
  )
}

export default ErrorPage