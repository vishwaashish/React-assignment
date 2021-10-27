import axios from "axios";

export const baseurl = 'https://raw.githubusercontent.com/bhanushalimahesh3/mock-api/main/users.json';
export const userprofile = 'https://raw.githubusercontent.com/bhanushalimahesh3/mock-api/main/user-profile.json';

export const getdashboardapi = (url,config, callback, errorcallback)=>{
    axios.get(url, config)
    .then((res) => {
      if(callback != null){
         callback(res);
      }
    })
    .catch((err) => {
      if(errorcallback != null){
         errorcallback(err);
      }
    })

}
