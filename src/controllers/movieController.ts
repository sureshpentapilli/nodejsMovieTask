import { Request, Response } from 'express';
import { Movie } from '../models/movie';

export const getMovies = async (req: Request, res: Response): Promise<void> => {
  try {
    const { query } = req.query;
    const filter = query
      ? { $or: [{ title: new RegExp(query as string, 'i') }, { genre: new RegExp(query as string, 'i') }] }
      : {};
    const movies = await Movie.find(filter);
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching movies', error: err });
  }
};

export const addMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, genre, rating, streamingLink } = req.body;
    const movie = new Movie({ title, genre, rating, streamingLink });
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ message: 'Error adding movie', error: err });
  }
};

export const updateMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, genre, rating, streamingLink } = req.body;
    const movie = await Movie.findByIdAndUpdate(
      id,
      { title, genre, rating, streamingLink },
      { new: true }
    );
    if (!movie) {
      res.status(404).json({ message: 'Movie not found' });
      return;
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json({ message: 'Error updating movie', error: err });
  }
};

export const deleteMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByIdAndDelete(id);
    if (!movie) {
      res.status(404).json({ message: 'Movie not found' });
      return;
    }
    res.status(200).json({ message: 'Movie deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting movie', error: err });
  }
};
