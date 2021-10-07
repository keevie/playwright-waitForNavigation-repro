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
  return res.redirect('/two');
})

app.get('/two', (req, res) => {
  return res.send(`<body>
    hello world
  </body>`)

})

app.listen(port);
