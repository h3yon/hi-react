exports.selectPosts = `SELECT id, title, writer, content, DATE_FORMAT(createdAt, '%Y-%m-%d %H:%i:%s') as createdAt FROM post WHERE status = 1`;
exports.selectPost = `SELECT title, writer, content, DATE_FORMAT(createdAt, '%Y-%m-%d %H:%i:%s') as createdAt 
                        FROM post WHERE status = 1 AND id = ?`;
exports.insertPost = `INSERT INTO post(title, writer, content) VALUES (?, ?, ?)`;
exports.deletePost = `UPDATE post SET status = 0 WHERE id = ?`;
exports.patchPost = `UPDATE post SET title = ?, writer = ?, content = ? WHERE id = ?`;

exports.insertComment = `INSERT comment(content, postId) VALUES(?, ?)`;
exports.selectComments = `SELECT id, content, DATE_FORMAT(createdAt, '%Y-%m-%d %H:%i:%s') as createdAt, postId 
                        FROM comment WHERE postId = ?`;
