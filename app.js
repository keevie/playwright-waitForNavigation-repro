const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


app.get('/one', (req, res) => {
  return res.send(`<body><script>
    const form = document.createElement('form');
    form.method = 'POST';
    document.body.appendChild(form);
    form.submit();
    </script></body>`)
})

app.post('/one', (req, res) => {
  setTimeout(() => {
    return res.redirect('/two');
  }, 2000)
})

app.get('/two', (req, res) => {
  setTimeout(() => {
  return res.send(`<body>
    hello world
  </body>`)

  }, 1000)

})

app.listen(port);
