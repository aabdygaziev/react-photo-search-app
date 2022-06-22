import React from 'react';

function Photos({ photos, loading, page, itemsPerPage=10, query }) {

  let startIdx = (page - 1) * itemsPerPage;
  let endIdx = startIdx + itemsPerPage;
  const photosToRender = photos.slice(startIdx, endIdx);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center mt-20 rounded shadow-lg gap-6 max-w-sm">
        <h2 className="font-bold text-xl">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="z-30 lg:grid lg:grid-rows-5 lg:grid-flow-col mt-28 rounded shadow-lg gap-4 w-mx-md md:grid-rows-10 md:grid-flow-col md:grid-cols-1">
      {photosToRender.map(photo => {
        return (
          <div class="max-w-sm rounded shadow-lg border border-blue-200">
            <img class="w-full rounded" src={photo.src.landscape} alt={photo.alt} />
            <div class="px-6 py-2">
              <div class="font-bold text-xl mb-2 text-neutral-600 hover:text-blue-600"> <a href={photo.photographer_url}>{'Author: '+ photo.photographer}</a></div>
              <p>{photo.alt}</p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{query ? `#${query}`:""}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Photos;