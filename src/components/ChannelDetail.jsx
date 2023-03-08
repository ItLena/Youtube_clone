import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChannelCard  from './ChannelCard';
import  Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Box } from "@mui/material";


const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  console.log('channel Det:', channelDetail)

  useEffect(() => {
    fetchFromAPI(`channels?.part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId?=${id}&part=snippet%2Cid&order=date`)
      .then((data) => setVideos(data?.items));

  }, [id])
  return (
    <Box minHeight="95vh" >     
    <Box>
        <div style={{
          backgroundImage: 'linear-gradient(90deg, rgba(30,68,134,1) 0%, rgba(175,139,224,1) 35%, rgba(224,139,186,1) 100%)',
          zIndex: 10,
          height: '300px', 
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-100px" />
       </Box> 
        <div style={{marginTop: '5%'}}>
        <Videos videos={videos} />
     </div>
    </Box>
   )
}
export default ChannelDetail