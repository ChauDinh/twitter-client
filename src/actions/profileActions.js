import axios from "axios";
import {
  LOAD_PROFILE,
  GET_PROFILE,
  GET_POSTS,
  LOADING_POSTS
} from "../constants";

export const getUserProfile = userId => dispatch => {
  dispatch(loadProfile());
  axios.get(`http://localhost:8080/api/users/${userId}`)
    .then(res => dispatch({
      type: GET_PROFILE,
      payload: res.data
    }))
    .catch(err => console.error(err));
};

export const getPostsByUserId = userId => dispatch => {
  dispatch(loadPosts());
  axios.get(`http://localhost:8080/api/posts/${userId}`)
    .then(res => dispatch({
      type: GET_POSTS,
      payload: res.data
    }))
    .catch(err => console.error(err));
}

export const loadProfile = () => {
  return {
    type: LOAD_PROFILE
  }
};

export const loadPosts = () => {
  return {
    type: LOADING_POSTS
  }
}