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
  // };

  // app.post("/api/posts", (req, res) => {
  // console.log("파라미터 좀 보자", req.body);
  // const sql = "INSERT INTO post VALUES (null, ?, ?, ?, 1, NOW())";
  // const { writer, title, content } = req.body;
  // const params = [title, writer, content];
  // connection.query(sql, params, (error, result, fields) => {
  //   if (error) throw error;
  //   res.send(result);
  //   console.log(result);
  // });
  // });
};

//   app.get("/api/posts/:id", (req, res) => {
//     const sql = "SELECT title, writer, content, createdAt From post WHERE status = 1 AND id = ?";
//     const { id } = req.params;
//     connection.query(sql, [id], (error, result, fields) => {
//       if (error) throw error;
//       res.send(result);
//     });
//   });
//   app.delete("/api/posts/:id", (req, res) => {
//     const sql = "UPDATE post SET status = 0 WHERE id = ?";
//     const { id } = req.params;
//     connection.query(sql, [id], (error, result, fields) => {
//       if (error) throw error;
//       res.send(result);
//       console.log(result);
//     });
//   });
//   app.post("/api/posts/:id/edit", (req, res) => {
//     const sql = "UPDATE post SET title = ?, writer = ?, content = ? WHERE id = ?";
//     const { id } = req.params;
//     const { writer, title, content } = req.body;
//     const params = [title, writer, content, id];
//     console.log(params);
//     connection.query(sql, params, (error, result, fields) => {
//       if (error) throw error;
//       res.send(result);
//       console.log(result);
//     });
//   });
// };

// app.listen(port, () => console.log(`hi express!! port: ${port}`));
