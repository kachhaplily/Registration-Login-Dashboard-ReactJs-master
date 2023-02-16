import axios from "axios";

let myToken = JSON.parse(localStorage.getItem("user"));

const authFetch = axios.create({
  
  baseURL: "https://real-pear-fly-kilt.cyclic.app"

})

authFetch.interceptors.request.use(
  (request) => {
    if(request.url == "/accounts/authenticate" || request.url == "/accounts/register") {
      return request;
    }
    request.headers["Authorization"] =`Bearer ${myToken.jwtToken}`
    // console.log('request sent');
    return request;
  },
  (error) => {
          //to handle or save data in cloud
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    // console.log('got response');
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 404) {
      // do something
      console.log('NOT FOUND');
    }
    if (error.response.status === 401) {
      // do something
      console.log('NOT FOUND');
    }
    return Promise.reject(error);
  }
);


export default authFetch;