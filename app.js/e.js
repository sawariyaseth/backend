const express = require('express');
const app = express();

app.set("view engine",'ejs')

app.get('/', (req, res) => {
  res.render('index', { text: 'Hello, EJS!' });
});
app.get('/health', (req, res) => {
    res.send('OK');
    });
app.listen(5000, () => {
    console.log(`Server is running at http://localhost:5000`);
    });

