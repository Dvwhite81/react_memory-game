import axios from 'axios';
import { ImageType } from './types';

const API_KEY = import.meta.env.VITE_API_KEY;

const getImageUrls = async (category: string) => {
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${category}`;
  const response = await axios.get(URL);
  console.log('response:', response);
  const { hits } = response.data;
  console.log('hits:', hits);
  const imageUrls = hits.map((r: ImageType) => r.largeImageURL);
  console.log('imageUrls:', imageUrls);
  return imageUrls;
}

export default {
  getImageUrls,
}
