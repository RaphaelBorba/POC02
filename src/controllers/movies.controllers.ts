import { createMovieDB, deleteMovieByIdDB, getMoviesDB, getSeenMoviesDB, updateMovieDB, updateMovieWithResumeDB, updateUnsawMovieDB } from "../repositories/movies.repositories";
import { Request, Response } from "express";


export async function getMovies(req: Request, res: Response) {

    try {

        const movies = await getMoviesDB()

        res.status(200).send(movies)

    } catch (error) {

        console.log(error)
        res.sendStatus(500)
    }
}

export async function createMovie(req: Request, res: Response) {

    const { body } = req

    try {

        await createMovieDB(body)

        res.sendStatus(201)

    } catch (error) {

        console.log(error)
        res.sendStatus(500)
    }
}

export async function deleteMovieById( req:Request, res:Response){

    const {id} = req.params

    try {

        await deleteMovieByIdDB(Number(id))

        res.sendStatus(200)
        
    } catch (error) {
        
        console.log(error)
        res.sendStatus(500)
    }
}

export async function updateMovie(req:Request, res:Response){

    const {id} = req.params
    const {body} = req

    try {
        
        if(body){

            await updateMovieWithResumeDB(Number(id), body.resume)
        }else{

            await updateMovieDB(Number(id))
        }

        res.sendStatus(200)

    } catch (error) {
        
        console.log(error)
        res.sendStatus(500)
    }
}

export async function updateUnsawMovie(req:Request, res:Response){

    const {id} = req.params

    try {

        await updateUnsawMovieDB(Number(id))

        res.sendStatus(200)
        
    } catch (error) {
        
        console.log(error)
        res.sendStatus(500)
    }
}

export async function getSeenMovies(req:Request, res:Response){

    try {

        const seenMovies = await getSeenMoviesDB()

        res.status(200).send(seenMovies.rows)
        
    } catch (error) {
        
        console.log(error)
        res.sendStatus(500)
    }
}