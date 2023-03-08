import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoChannelTitle, demoChannelUrl } from '../utils/constans'


const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

  return (
    <Card sx={{ width: '300px', height: '300px', paddingBottom: '10px', background: 'black' }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: 300, height: 180 }} />
      </Link>
      <CardContent>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <h4 style={{ margin: '0', color: 'white' }}>
            {snippet.title}
          </h4>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <h5 style={{ color: 'var(--accent)', margin: '0.5em 0', display: 'flex', alignItems: 'center' }}>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle style={{ color: 'whitesmoke', marginLeft: '5px' }} />
          </h5>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard