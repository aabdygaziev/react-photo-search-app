import { useState, useEffect } from 'react';
import Photos from './components/Photos';
import Pagination from './components/Pagination';
import Search from './components/Search';
import { fetchPhotos } from './utils.js';

const API_KEY = "563492ad6f91700001000001f73452ae792a4460b7be2366dda82b86";

let options = {
  "method": "GET",
  "mode": "cors",
  "headers" : {
    "Authorization": API_KEY,
  },
};

function App() {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [photosPerPage] = useState(10);
  
  useEffect(() => {
    async function getPhotos() {
      setLoading(true);
      let data = await fetchPhotos(query, options);
      setPhotos(data.photos);
      setLoading(false);
    }
    getPhotos();
  }, [ query ]);

  const paginate = pageNum => setPage(pageNum);

  const addQuery = keyword => {
    setQuery(keyword);
  }
  
  return (
    <div className="flex flex-col bg-indigo-200 h-full  w-full justify-center item-center">
      <Search addQuery={addQuery}/>
      <Photos photos={photos} page={page} loading={loading} query={query}/>
      <Pagination 
        photosPerPage={photosPerPage} 
        totalPhotos={photos.length} 
        paginate={paginate}
        loading={loading}
      />
    </div>
  );
}

export default App;
