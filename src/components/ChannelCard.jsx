import React from 'react';
import { Link } from 'react-router-dom';
import {CardContent, CardMedia, Box} from '@mui/material';
import {CheckCircle} from '@mui/icons-material';
import {demoProfilePicture} from '../utils/constans'

const ChannelCard = ({channelDetail, marginTop}) => (
  <Box
   sx={{ width: '300px', height: '300px',  margin: 'auto', marginTop,  display: 'flex',
   justifyContent: 'center',
   alignItems: 'center'}}>
 
 <Link to={`/channel/${channelDetail?.id?.channelId}`}>

    <CardContent sx={{justifyContent:'center', display: 'flex', flexDirection:'column', alignItems: 'center'}}>
      <CardMedia 
       image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
      alt={channelDetail?.snippet?.title}
      sx={{ borderRadius: '50%', height: '180px', width: '180px' }}/>

      <h2 style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center' }}>
        {channelDetail?.snippet?.title}
      <CheckCircle style={{ color: 'whitesmoke', marginLeft: '5px' }} />
      </h2>
      {channelDetail?.statistics?.subscriberCount && (
        <h4 style={{color:'whitesmoke', margin: 0}}> {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers</h4> 
        )
      }
    </CardContent>    
  </Link>   
 </Box>
  );

export default ChannelCard