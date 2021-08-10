// const { logger } = require("../../config/winston");
const postService = require("./postService");
const baseResponse = require("../../config/baseResponseStatus");
const { errResponse } = require("../../config/response");

exports.getPosts = async function (req, res) {
  const postsResult = await postService.getPosts();
  return res.send(postsResult);
};

exports.addPost = async function (req, res) {
  const { writer, title, content } = req.body;
  if (!writer || !title || !content) return res.send(errResponse(baseResponse.CHECK_INPUT_PARAMETER));
  const addPostsResult = await postService.addPost(writer, title, content);
  return res.send(addPostsResult);
};

exports.getDetailPost = async function (req, res) {
  const { id } = req.params;
  if (!id || isNaN(id)) return res.send(errResponse(baseResponse.CHECK_INPUT_PARAMETER));
  const detailPostResult = await postService.getDetailPost(id);
  return res.send(detailPostResult);
};

exports.deletePost = async function (req, res) {
  const { id } = req.params;
  if (!id || isNaN(id)) return res.send(errResponse(baseResponse.CHECK_INPUT_PARAMETER));
  const deletePostResult = await postService.deletePost(id);
  return res.send(deletePostResult);
};

exports.editPost = async function (req, res) {
  const { id } = req.params;
  const { writer, title, content } = req.body;
  if (!writer || !title || !content) return res.send(errResponse(baseResponse.CHECK_INPUT_PARAMETER));
  if (!id || isNaN(id)) return res.send(errResponse(baseResponse.CHECK_INPUT_PARAMETER));
  const editPostResult = await postService.editPost(title, writer, content, id);
  return res.send(editPostResult);
};

exports.addComment = async function (req, res) {
  const { id } = req.params;
  const { content } = req.body;
  if (!content) return res.send(errResponse(baseResponse.CHECK_INPUT_PARAMETER));
  if (!id || isNaN(id)) return res.send(errResponse(baseResponse.CHECK_INPUT_PARAMETER));
  const addCommentResult = await postService.addComment(content, id);
  return res.send(addCommentResult);
};

exports.getComments = async function (req, res) {
  const { id } = req.params;
  if (!id || isNaN(id)) return res.send(errResponse(baseResponse.CHECK_INPUT_PARAMETER));
  const getCommentsResult = await postService.getComments(id);
  console.log("출력해줘", getCommentsResult);
  return res.send(getCommentsResult);
};
