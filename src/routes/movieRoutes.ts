import express from 'express';
import { isAdmin } from '../middleware/adminCheck';
import { getMovies, addMovie, updateMovie, deleteMovie } from '../controllers/movieController';

const router = express.Router();

// Public routes
router.get('/movies', getMovies);
router.get('/search', getMovies);

// Admin routes
router.post('/movies', isAdmin, addMovie);
router.put('/movies/:id', isAdmin, updateMovie);
router.delete('/movies/:id', isAdmin, deleteMovie);

export default router;
