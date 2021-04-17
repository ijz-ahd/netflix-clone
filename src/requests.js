const API_KEY = "YOUR_API_KEY";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
  fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-us`,
  fetchUpComing: `/movie/upcoming?api_key=${API_KEY}&language=en-us`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-us`,
  fetchTV: `/tv/on_the_air?api_key=${API_KEY}&language=en-us`,
};

export default requests;
