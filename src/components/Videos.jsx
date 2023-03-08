import React from 'react'
import {Box} from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ videos }) => {
  return (

    <div style={{display: 'flex', gap: '1em', flexWrap: 'wrap', marginLeft: '15px', justifyContent: 'center'}}>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video ={item} />}
          {item.id.channelId && <ChannelCard channelDetail ={item} />}

        </Box>
      ))}
    </div>
  )
}

export default Videos