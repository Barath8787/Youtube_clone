import React from 'react'
import './Videos.css'
import Playvideo from '../../Component/Playvideo/Playvideo'
import Recommended from '../../Component/Recommended/Recommended'
import { useParams } from 'react-router-dom'
function Videos() {
  const{videoId,categoryId}=useParams() // useParams() reads them from the URL it a statehook
  console.log("Video ID:", videoId);
  console.log("Category ID:", categoryId);

  return (
    <div className='play-container'> 
      <Playvideo videoId={videoId}/>
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Videos