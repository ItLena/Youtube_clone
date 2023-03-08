import {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import {Box, Stack, Typography} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import Video from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {
  const {id} = useParams();
  const [videoDetail, setVideoDetail] = useState([]);
  const {snippet: {title}} = videoDetail;
  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=> setVideoDetail(data.items[0]))
  },[id])

  return (
    <Box minHeight='95vh'>
    <Box sx={{width: '100%', position: 'sticky', top: '90px'}}>
      <ReactPlayer url={`http://www.youtube.com/watch?v=${id}`}
       className='react-player' controls/> 
         {/* <h3 style={{color: 'whitesmoke'}}>{title}</h3>     */}
    </Box> 
   
    </Box>
  )
}

export default VideoDetail