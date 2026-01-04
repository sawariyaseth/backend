const express = require('express');
const app = express();
const port = 4000;
app.get('/', (req, res) => {
  res.send('moderndeployment');
});
app.get('/health', (req, res) => {
  res.send('OK');
}); 
app.get('/ready', (req, res) => {
  res.send('READY');
});  
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});