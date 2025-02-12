import express from "express";
import { MovieCreate, MovieDelete, MovieDetails, MovieIndex, MovieUpdate } from "../controllers/movies.controller.js";

const router=express.Router();

router.get('/',MovieIndex);

router.get('/:id',MovieDetails);

router.post('/',MovieCreate);

router.put('/:id',MovieUpdate);

router.delete('/:id',MovieDelete);

export default router;