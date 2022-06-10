export async function fetchPhotos(query, options) {

  const curatedAPI = "https://api.pexels.com/v1/curated/?page=1&per_page=80";
  const queryAPI = `https://api.pexels.com/v1/search/?page=1&per_page=80&query=${query}`;

  if (!query) {
    try {
      let res = await fetch(curatedAPI, options);
      let data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      let res = await fetch(queryAPI, options);
      let data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
}


