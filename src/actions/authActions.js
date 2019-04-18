import axios from "axios";
import { GET_ERRORS } from "../constants/index";

export const registerUser = (userData, history) => dispatch => {
  axios.post('http://localhost:8080/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.data
    }));
};

