import { createStreamerDB, deleteStreamerByIdDB, getStreamersDB } from "../repositories/streamer.repositories";
import { Request, Response } from "express";




export async function createStreamer(req: Request, res: Response) {

    const {body} = req

    try {

        await createStreamerDB(body.name)

        res.sendStatus(201)
        
    } catch (error) {

        console.log(error)
        res.sendStatus(500)
    }
}

export async function getStreamers(req:Request, res:Response){

    try {

        const genres = await getStreamersDB()

        res.status(200).send(genres.rows)
        
    } catch (error) {
        
        console.log(error)
        res.sendStatus(500)
    }
}

export async function deleteStreamerById(req:Request, res:Response){

    const {id} = req.params

    try {

        await deleteStreamerByIdDB(id)

        res.sendStatus(200)
        
    } catch (error) {
        
        console.log(error)
        res.sendStatus(500)
    }
}