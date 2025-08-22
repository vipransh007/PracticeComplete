import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/index.js'
import { app } from './app.js';

dotenv.config({path: './.env'});

const PORT = process.env.PORT || 5000;

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