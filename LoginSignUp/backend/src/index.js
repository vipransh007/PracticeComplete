import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/index.js'

dotenv.config();


const app = express();
const PORT = process.env.PORT;;

// app.get('/', (req, res) => {
//   res.send('This is the backend server');
// });

connectDB()
.then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} ✅✅`);
  });
})
.catch((error) => {
  console.error('Database connection failed:', error);
  process.exit(1); 
});