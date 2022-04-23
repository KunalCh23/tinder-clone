import React from 'react'
import './Header.css'
import { Person } from '@material-ui/icons'
import {IconButton} from '@material-ui/core'
import {Forum} from '@material-ui/icons'


function Header() {
  return (
    <div className='header' >
        {/* <h2>Header</h2> */}
        <IconButton>
          <Person fontSize='large' className='header_icon' />
        </IconButton>

        <img 
        className='header_logo'
        src="https://cdn-icons-png.flaticon.com/512/725/725325.png" 
        alt="" />
        <IconButton>
          <Forum fontSize='large' className='header_icon' />
        </IconButton>
    </div>
  )
}

export default Header