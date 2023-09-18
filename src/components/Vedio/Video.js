import React ,{ useState, useReducer } from 'react';
import {FiShare2, FiThumbsUp} from "react-icons/fi";

const initialState = {
  likes: 100,
}

const Reducer = (state, action) => {
  switch(action.type) {
    case 'HANDLE_LIKE':
      return {
        ...state,
        likes: state.likes + action.payload
      }
    default:
      return state
  }
}
const Video = (props) => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  // const { likes, dislikes } = state
  const [status, setStatus] = useState(null)
  const handleClickLike = () => {
    if (status==='like') {
      setStatus(null)
      dispatch({
        type: 'HANDLE_LIKE',
        payload: -1,
      })
    } else {
      setStatus('like')
      dispatch({
        type: 'HANDLE_LIKE',
        payload: 1,
      })
    }
  }
   
  return (
    <div className='vedio-icon'>
        <video 
          controls 
          autoPlay
          src={props.src} />
          <div>
          <div className={status==='like'? 'like active' : 'like'} onClick={handleClickLike}>
          <i class="fa fa-thumbs-up fa-3x like i" aria-hidden="true" ></i>
          </div>
          {/* <FiThumbsUp onClick={handleClickLike}></FiThumbsUp> */}
          {/* <FiShare2></FiShare2> */}
          </div>
          
      </div>
  )
}

export default Video;
