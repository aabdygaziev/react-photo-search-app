const Pagination = ({ photosPerPage, totalPhotos, paginate, loading }) => {
  const pageNums = [];

  for (let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++) {
    pageNums.push(i);
  }

  if (loading) {
    return "";
  }

  return (
    <div className="mt-28 lg:flex lg:fixed lg:flex-col 
      justify-center lg:w-30px space-y-4 my-4 right-32">
        {pageNums.map(num => {
          return (
            <button className="ml-4 bg-indigo-500 hover:bg-blue-500 text-slate-900 font-semibold hover:text-white py-2 px-5 border border-blue-500 hover:border-transparent rounded-lg " key={num} onClick={() => paginate(num)}>
            {num}
            </button>
          );
        })}
    </div>
  );
}

export default Pagination;