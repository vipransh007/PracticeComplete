import express from 'express';

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('This is the backend server');
});
app.listen(PORT, () => {
    console.log(`Server us running on port ${PORT}`)
})