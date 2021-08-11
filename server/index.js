const express = require("./config/express");
const { logger } = require("./config/winston");
const fs = require("fs");
// http2, spdy로 대체 가능
const spdy = require("spdy");
// const http2 = require("http2");
const port = process.env.PORT;

spdy
  .createServer(
    {
      key: fs.readFileSync("./config/server.key"),
      cert: fs.readFileSync("./config/server.crt"),
    },
    express()
  )
  .listen(port, (err) => {
    if (err) {
      throw new Error(err);
    }
    logger.info(`${process.env.NODE_ENV} - API Server Start At Port ${port}`);
  });

// express().listen(port);
// logger.info(`${process.env.NODE_ENV} - API Server Start At Port ${port}`);
