import axios from "axios";

const API_URL = "http://127.0.0.1:8001/api/";

const register = (name, email, password) => {
  const bodyData = new FormData();
  bodyData.append('name', name); 
  bodyData.append('email', email);
  bodyData.append('password', password);
  return axios({
    method: 'post',
    url: API_URL + "register",
    data: bodyData, headers: {
    'Content-Type': 'multipart/form-data' } 
    }); 
  // return axios.post(API_URL + "register", {
  //   name,
  //   email,
  //   password,
  // });
};

const login = (email, password) => {
  const bodyData = new FormData(); 
  bodyData.append('email', email);
  bodyData.append('password', password);
  return axios({
    method: 'post',
    url: API_URL + "login",
    data: bodyData, headers: {
    'Content-Type': 'multipart/form-data' } 
    })
    .then((response) => {
      console.log(response);
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
        //localStorage.setItem("token", JSON.stringify(response.data.token));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

// const getCurrentToken = () => {
//   return JSON.parse(localStorage.getItem("token"));
// };

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  //getCurrentToken,
};

export default AuthService;