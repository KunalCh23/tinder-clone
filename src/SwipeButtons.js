import React from 'react'
import './SwipeButton.css'
import { Favorite, FlashOn, Replay } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { Star } from '@material-ui/icons'

function SwipeButtons() {
  return (
    <div className='swipeButtons' >
       <IconButton className='sB__repeat' >
           <Replay fontSize='large'></Replay>
       </IconButton >
       <IconButton className='sB__left'>
           <Close fontSize='large'></Close>
       </IconButton>
       <IconButton className='sB__star' >
           <Star fontSize='large'></Star>
       </IconButton>
       <IconButton className='sB__right' >
           <Favorite fontSize='large'></Favorite>
       </IconButton>
       <IconButton className='sB__lightning' >
           <FlashOn fontSize='large'></FlashOn>
       </IconButton>
    </div>
  )
}

export default SwipeButtons