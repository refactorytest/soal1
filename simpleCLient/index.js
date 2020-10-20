const express = require('express');
const PORT = 5000;
const router = express.Router();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use('/'.router());

router.post("/", function (req, res) {
    let response = { ...res.body, ...req.headers };
    console.log(
      `${new Date()} Success : ${req.method} ${req.headers.host} ${JSON.stringify(
        response
      )} `
    );
    res.end(JSON.stringify(response));
  });
  app.use('/',router );
app.get('*', (req, res) => {
    res.send('404 Not Found');
});

    app.listen(PORT, () => {
        console.log(`Server runs on port ${PORT}`);
    });
