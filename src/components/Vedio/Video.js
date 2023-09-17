import React from 'react'

const Video = (props) => {
   
  return (
    <div>
        <video 
          controls 
          autoPlay
          src={props.src} />
      </div>
  )
}

export default Video;
