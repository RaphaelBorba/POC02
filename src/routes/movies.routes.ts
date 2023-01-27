import { createMovie, deleteMovieById, getMovies, getSeenMovies, updateMovie, updateUnsawMovie } from "../controllers/movies.controllers";
import { Router } from "express";
import { validateMovieBody, validateMovieById } from "../middlewares/movies.middlewares";

const moviesRouter = Router()

moviesRouter
    .get('/movies', getMovies)
    .post('/movies', validateMovieBody, createMovie)
    .delete('/movies/:id', validateMovieById, deleteMovieById)
    .post('/movies/saw/:id', validateMovieById, updateMovie)
    .post('/movies/unsaw/:id', validateMovieById, updateUnsawMovie)
    .get('/movies/seen', getSeenMovies)

export { moviesRouter }