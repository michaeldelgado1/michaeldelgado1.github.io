import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () =>{
    return(
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
             | 
            <li>
              <Link to="/test">Test</Link>
            </li>
             | 
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
    )
}

export default Nav