const express = require('express');
const PORT = 5000;
const router = express.Router();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var fs = require("fs");
router.post("/", function (req, res) {
  let response = { ...res.body, ...req.headers };
  let log = `[${new Date()}] Success : ${req.method} ${
    req.headers.host
  } ${JSON.stringify(response)} \n`;
  fs.appendFile("server.log", log, (err) => {
    if (err) console.log(err);
    console.log("Successfully Written to File.");
  });
  res.send(JSON.stringify(response));
});

  app.use('/',router );
app.get('*', (req, res) => {
    res.send('404 Not Found');
});

    app.listen(PORT, () => {
        console.log(`Server runs on port ${PORT}`);
    });
