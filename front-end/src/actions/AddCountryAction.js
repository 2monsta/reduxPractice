import axios from 'axios';

export default(countryName)=>{
  const ajaxPromise = axios({
    method: "POST",
    url: "http://localhost:8080/addCountry",
    data: countryName
  });
  return {
    type: "ADD_COUNTRY",
    payload: ajaxPromise
  }
}