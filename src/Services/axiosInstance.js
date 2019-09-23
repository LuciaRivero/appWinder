import axios from 'axios';

const axiosInstance = (getState) => {

    return axios.create({
        headers: {
          'Authorization': 'none',
          'Content-Type': 'application/json',
        }
      });
}

export default axiosInstance;