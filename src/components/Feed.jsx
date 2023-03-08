import { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)

    .then((data)=>setVideos(data.items))
  }, [selectedCategory]);


  return (
    <Stack sx={{ flexDirection: 'row'}} >
      <Box sx={{ height: { sx: 'auto', md: '92hv' },  borderRight: '1px solid grey' }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      </Box>
      <Box >
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ margin: '0 0.5em', color: 'whitesmoke' }}>{selectedCategory}</h1>
          <h1 style={{ color: 'var(--accent)' }}>videos</h1>
        </span>
        <Videos videos ={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed