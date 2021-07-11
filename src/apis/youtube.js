import axios from 'axios';

const KEY = 'AIzaSyADNDgswKeK-jez2Byxv0w3t5z31A_lugE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
