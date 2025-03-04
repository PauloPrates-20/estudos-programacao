import { Request, Response } from 'express'
import { MovieModel } from '../models/Movie'
import logger from '../../config/logger'

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);

    res.status(201).json(movie);
  } catch (e: any) {
    logger.error(`Erro no sistema: ${e.message}`);
    res.status(500).json({ error: 'Por favor, tente novamente mais tarde.'});
  }
}

export async function findMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      res.status(404).json({ error: "O filme não existe" });
      return;
    }

    res.status(200).json(movie);
  } catch (e: any) {
    logger.error(`Erro no sistema: ${e.message}`);
    res.status(500).json({ error: 'Por favor, tente novamente mais tarde.'});
  }
}

export async function getAllMovies(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find();
    res.status(200).json(movies);
  } catch (e: any) {
    logger.error(`Erro no sistema: ${e.message}`);
    res.status(500).json({ error: 'Por favor, tente novamente mais tarde.'});
  }
}

export async function removeMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      res.status(404).json({ error: 'O filme não existe' });
      return;
    }

    await movie.deleteOne();
    res.status(200).json({ msg: 'Filme removido com sucesso' });
  } catch (e: any) {
    logger.error(`Erro no sistema: ${e.message}`);
    res.status(500).json({ error: 'Por favor, tente novamente mais tarde.'});
  }
}

export async function updateMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const data = req.body;
    let movie = await MovieModel.findById(id);

    if (!movie) {
      res.status(404).json({ error: 'O filme não existe' });
      return;
    }

    await MovieModel.updateOne({ _id: id }, data);
    res.status(200).json({ data });
  } catch (e: any) {
    logger.error(`Erro no sistema: ${e.message}`);
    res.status(500).json({ error: 'Por favor, tente novamente mais tarde.'});
  }
}