import axios from "axios";

const instance = axios.create({
    baseURL: 'https://9cxlt1wgo5.execute-api.us-east-1.amazonaws.com/api',
    timeout: 20000,
    headers: {'Authorization': 'basic aa5b1926-555c-410e-8038-e12ca537a04b'}
  });

  export default instance