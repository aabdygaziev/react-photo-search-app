const Pagination = ({ photosPerPage, totalPhotos, paginate, loading }) => {
  const pageNums = [];

  for (let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++) {
    pageNums.push(i);
  }

  if (loading) {
    return "";
  }

  return (
    <div className="flex justify-center w-full my-4">
        {pageNums.map(num => {
          return (
            <button className="rounded-lg border-solid border-2 border-indigo-600 mx-4 w-8" key={num} onClick={() => paginate(num)}>
            {num}
            </button>
          );
        })}
    </div>
  );
}

export default Pagination;