import React from 'react';
import Video from './Video';

const Vedioplayer = () => {
    var VIDEOS = {
        vediosrc: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',}
        // const getInitialState: function () {
        //     return { src: VIDEOS.deer};
        //   },
  return (
    <div>
       <div className='videoplayer'>
        <Video src={VIDEOS.vediosrc} />
        <div id="video-content">
        <h2 className='h2'>Watch Beautiful Video</h2>
        <h3 className='h2'>Start Now</h3>
        <p className='h2'>Lorem ipsum dolor sit amet,
                consectetur</p>
                <p className='h2'>Lorem ipsum dolor sit amet,
                consectetur</p>
                <p className='h2'>Lorem ipsum dolor sit amet,
                consectetur</p>
        </div>
        
      </div>
    </div>
  )
}

export default Vedioplayer
