import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'


const Video = () => {

  const {videoID, categoryId} = useParams();
  console.log("categoryId",categoryId);
  console.log("videoID",videoID);

  return (
    <div className='play-container'>
      <PlayVideo videoID={videoID}/>
      <Recommended categoryID={categoryId}/>
    </div>
  )
}

export default Video;