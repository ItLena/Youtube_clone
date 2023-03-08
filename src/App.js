
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Feed, VideoDetail, ChannelDetail,SearchFeed, Navbar } from './components/index';



const App = () => (
  <BrowserRouter>
   <div style={{backgroundColor: 'var(--bg-grey)'}}> 

      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id'  element={<VideoDetail />} />
        <Route path='/channel/:id'  element={<ChannelDetail />} />
        <Route path='/search/:searchTerm'  element={<SearchFeed />} />
      </Routes>

  </div>

  </BrowserRouter>

)

export default App;
