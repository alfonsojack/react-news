import './ErrorPage'
import { Routes, Route, NavLink, Link } from 'react-router-dom';

function ErrorPage ({ message }) {
  return (
    <div>
      <h1>{message}</h1>
      <div>
        {message.includes('exist') ? (
          <div>
            <h2>Try going home</h2>
            <img src='https://t4.ftcdn.net/jpg/02/76/90/37/360_F_276903704_R5meF5b05TBX8BNyuy1siuqMDJwP6kMN.jpg'/>
            </div>
        ) : (
          <div>
          <h2>Try going home or come back later if the problem persists</h2>
          <img src='https://us.123rf.com/450wm/lineartist/lineartist1907/lineartist190700815/127345150-dropping-a-letter-in-trash-bin-retro-postman-cartoon-courier-guy-vector-illustration.jpg?ver=6'/>
          </div>
        )
        }
      </div>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default ErrorPage