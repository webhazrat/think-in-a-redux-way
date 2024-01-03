const { POSTS_LOADED } = require("./constans");

const fetchPosts = async (dispatch, getState) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const posts = await response.json();
  dispatch({
    type: POSTS_LOADED,
    payload: {
      posts,
    },
  });
};

module.exports = {
  fetchPosts,
};
