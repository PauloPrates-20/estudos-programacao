import { Router, Request, Response } from "express"
import { createMovie, findMovieById, getAllMovies, removeMovie, updateMovie } from "./controllers/movieControllers"
import { validate } from './middleware/handleValidation'
import { movieCreateValidation } from "./middleware/movieValidation";

const router = Router();

export default router
  .get('/test', (req: Request, res: Response) => {
    res.status(200).send('API working!');
  })
  .post('/movie', movieCreateValidation(), validate, createMovie)
  .get('/movie', getAllMovies)
  .get('/movie/:id', findMovieById)
  .delete('/movie/:id', removeMovie)
  .patch('/movie/:id', movieCreateValidation(), validate, updateMovie)