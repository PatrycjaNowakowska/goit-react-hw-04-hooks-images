import { API_KEY, PER_PAGE } from './constans';
import axios from 'axios';

const getImages = async (searchInputValue, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${searchInputValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${PER_PAGE}`
  );
  return data.hits;
};

export default getImages;