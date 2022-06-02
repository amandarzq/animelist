import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { MainProvider } from './context';
import { 
  AnimeDetail,
  AnimeList, 
  CollectionDetail, 
  CollectionList 
} from './pages';
import { NavBar}  from './components';
import { PageLayout } from './styles/components';

function App() {
  return (
   <BrowserRouter>
    <MainProvider>
      <PageLayout padding="0 0 2.5rem 0">
        <NavBar/>
        <Routes>
          <Route path="/collection" element={<CollectionList />} />
          <Route path="/collection/:collectionId" element={<CollectionDetail />} />
          <Route path="/:animeId" element={<AnimeDetail />} />
          <Route path="/" element={<AnimeList />} />
        </Routes>
      </PageLayout>
     </MainProvider>
   </BrowserRouter>
  )
};

export default App;
