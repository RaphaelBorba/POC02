import { GenreOrStreamerSchema } from "../schemas/movies.schemas";
import { NextFunction, Request, Response } from "express";
import { checkStreamerByIdDB, checkStreamerBynameDB } from "../repositories/streamer.repositories";


export async function validateStreamerByName(req:Request, res:Response, next:NextFunction){

    const {body} = req

    const {error} = GenreOrStreamerSchema.validate(body)

    if(error) {return res.sendStatus(400)}

    const check = await checkStreamerBynameDB(body.name)

    if(check.rows[0]) {return res.sendStatus(409)}

    next()
}

export async function validateStreamerById(req:Request, res:Response, next:NextFunction){

    const {id} = req.params

    const check = await checkStreamerByIdDB(id)
    console.log(check);
    

    if(!check.rows[0]){ return res.sendStatus(404)}

    next()
}