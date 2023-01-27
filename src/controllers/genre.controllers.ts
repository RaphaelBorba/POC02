import { createGenreDB, deleteGenreByIdDB, getGenresDB } from "../repositories/genre.repositories"
import { Request, Response } from "express"



export async function createGenre(req: Request, res: Response) {

    const { body } = req

    try {

        await createGenreDB(body.name)

        res.sendStatus(201)

    } catch (error) {

        console.log(error)
        res.sendStatus(500)
    }
}

export async function deleteGenreById(req: Request, res: Response){

    const {id} = req.params

    try {

        await deleteGenreByIdDB(Number(id))

        res.sendStatus(200)
        
    } catch (error) {

        console.log(error)
        res.sendStatus(500)
    }
}

export async function getGenres(req:Request, res:Response){

    try {

        const genres = await getGenresDB()

        res.status(200).send(genres)
        
    } catch (error) {
        
        console.log(error)
        res.sendStatus(500)
    }
}