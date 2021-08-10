module.exports = function (app) {
  const post = require("./postController");
  const dbconfig = require("./../../config/database");
  const mysql = require("mysql2");
  const connection = mysql.createConnection(dbconfig);

  app.get("/", (req, res) => res.send("Hi Express"));

  app.get("/api/posts", post.getPosts);
  app.post("/api/posts", post.addPost);
  app.get("/api/posts/:id", post.getDetailPost);
  app.delete("/api/posts/:id", post.deletePost);
  app.post("/api/posts/:id/edit", post.editPost);

  app.post("/api/posts/:id/comments", post.addComment);
  app.get("/api/posts/:id/comments", post.getComments);
};
