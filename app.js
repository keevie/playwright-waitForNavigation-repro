const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/one', (req, res) => {
  return res.send(`<body>hello there</body>`)
})

app.listen(port);
