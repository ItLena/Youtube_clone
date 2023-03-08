import axios from 'axios'


const getAllVideos =  'https://youtube-v31.p.rapidapi.com';

const options = {
        params: {        
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '1a9841bacemsh495645d1a82e24ap10d8acjsn43ea13af20dc',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async(url) =>{

  const {data} = await axios.get(`${getAllVideos}/${url}`, options); 
  
  return data;
}
