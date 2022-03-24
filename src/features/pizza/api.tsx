import axios from "axios";

const instance = axios.create({
    baseURL: 'https://9cxlt1wgo5.execute-api.us-east-1.amazonaws.com/api',
    timeout: 1000,
    headers: {'Authorization': 'basic e0b28e81-3e9b-4667-bede-6daeb3aa23cb'}
  });

  export default instance