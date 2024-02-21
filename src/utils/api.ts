import axios from 'axios';
import { ImageType } from './types';

const API_KEY = import.meta.env.VITE_API_KEY;

const getImageUrls = async (category: string) => {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&orientation=horizontal`;
  const response = await axios.get(URL);
  const { hits } = response.data;
  const imageUrls = hits.map((r: ImageType) => r.largeImageURL);
  return imageUrls;
}

export default {
  getImageUrls,
}
