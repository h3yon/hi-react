const { pool } = require("../../config/database1");
const postQuery = require("./postQuery");
const baseResponse = require("../../config/baseResponseStatus");
const { response, errResponse } = require("../../config/response");

async function getPosts() {
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    const [getPostsResult] = await connection.query(postQuery.selectPosts);
    console.log(getPostsResult);
    connection.release();
    return getPostsResult;
  } catch (err) {
    console.log(err);
    return errResponse(baseResponse.FAIL_GET_POSTS);
  }
}

async function addPost(title, writer, content) {
  const insertPostParams = [title, writer, content];
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    const [result] = await connection.query(postQuery.insertPost, insertPostParams);
    connection.release();
    return result;
  } catch (err) {
    console.log(err);
    return errResponse(baseResponse.FAIL_ADD_POST);
  }
}

async function getDetailPost(id) {
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    const [detailPostResult] = await connection.query(postQuery.selectPost, id);
    connection.release();
    return detailPostResult;
  } catch (err) {
    console.log(err);
    return errResponse(baseResponse.FAIL_GET_POST);
  }
}

async function deletePost(id) {
  try {
    const connection = await pool.getConnection(async (conn) => conn);
    const [result] = await connection.query(postQuery.deletePost, id);
    connection.release();
    return result;
  } catch (err) {
    console.log(err);
    return errResponse(baseResponse.FAIL_DELETE_POST);
  }
}

async function editPost(title, writer, content, id) {
  try {
    const patchPostParams = [title, writer, content, id];
    const connection = await pool.getConnection(async (conn) => conn);
    const [result] = await connection.query(postQuery.patchPost, patchPostParams);
    connection.release();
    return result;
  } catch (err) {
    console.log(err);
    return errResponse(baseResponse.FAIL_PATCH_POST);
  }
}

module.exports = {
  getPosts,
  addPost,
  getDetailPost,
  deletePost,
  editPost,
};
