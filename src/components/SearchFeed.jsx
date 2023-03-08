import { useEffect, useState }  from 'react';
import { Box } from '@mui/material';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)

    .then((data)=>setVideos(data.items))
  }, [searchTerm]);
  return (
    <Box >
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ margin: '0 0.5em', color: 'whitesmoke' }}>Search results for: </h1>
          <h1 style={{ color: 'var(--accent)' }}>{searchTerm}</h1>
        </span>
        <Videos videos ={videos}/>
      </Box>
  )
}


export default SearchFeed

