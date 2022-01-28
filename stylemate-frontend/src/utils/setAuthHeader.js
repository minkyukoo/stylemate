import axios from "axios";

const setAuthHeader=(token)=>{
    console.log("token",token)
    if (token) {
        axios.defaults.headers = {
          Authorization: 'Bearer ' + token,
          Accept: 'application/json'
        }
      } else {
        delete axios.defaults.headers;
      }
}

export default setAuthHeader;