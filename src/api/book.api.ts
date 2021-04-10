import axios from 'axios';

import { API_URL } from '../common/const';

export const fetchBooks = async () =>
  (await axios.get(API_URL + '/books')).data;
