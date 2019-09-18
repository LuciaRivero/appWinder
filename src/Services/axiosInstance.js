import axios from 'axios';

const axiosInstance = () => {

    return axios.create({
        headers: {
          'Authorization': '',
          'Content-Type': '',
        }
      });
}

export default axiosInstance;