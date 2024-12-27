import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import movieRoutes from './routes/movieRoutes';

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', movieRoutes);

// Database Connection
mongoose.connect('mongodb+srv://sureshkumarsk72746:suresh%40143@cluster0.hq1d7.mongodb.net/ott?retryWrites=true&w=majority',)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

export default app;