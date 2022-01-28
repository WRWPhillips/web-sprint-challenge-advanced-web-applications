import axios from 'axios';

const axiosWithAuth = ()=> {
  const authToken = localStorage.getItem("token");

  return axios.create({
    headers: {
      authorization: authToken
    }
  });
}

export default axiosWithAuth;

//Task List:
//1. Complete axiosWithAuth
