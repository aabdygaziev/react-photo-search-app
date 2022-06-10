import React from 'react';

function Photos({ photos, loading, page, itemsPerPage=10 }) {

  let startIdx = (page - 1) * itemsPerPage;
  let endIdx = startIdx + itemsPerPage;
  const photosToRender = photos.slice(startIdx, endIdx);

  if (loading) {
    return <h2 className='laoding'>Loading...</h2>
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 rounded">
      {photosToRender.map(photo => {
        return (
          <figure className="border-solid border-indigo-600 rounded bg-gray" key={photo.id+1}>
            <img className="rounded-tr-lg mx-8" src={photo.src.medium} alt={photo.alt} key={photo.id}/>    
            <figcaption className="mx-8">Author: <a href={photo.photographer_url}>{photo.photographer}</a></figcaption>
          </figure>
        );
      })}
    </div>
  );
}

export default Photos;