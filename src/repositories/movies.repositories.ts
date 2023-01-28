import { Movies } from "../protocols";
import { db } from "../data/db";
import prisma from "../data/database";


export function getMoviesDB() {
    return prisma.movies.findMany();
}

export function checkMovieByNameDB(name: string) {
    return prisma.movies.findFirst({where:{title:name.toLowerCase()}})
}

export function createMovieDB(body: Movies) {

    return prisma.movies.create({
        data:{
            title:body.title,
            genre:body.genre,
            status:false,
            streamer:body.streamer
        }
    })
}

export function checkMovieByIdDB(id: number) {
    return prisma.movies.findFirst({where:{id:id}})
}

export function deleteMovieByIdDB(id: number) {
    return prisma.movies.delete({where:{id:id}})
}

export function updateMovieWithResumeDB(id: number, resume: string) {

    return prisma.movies.update({
        where:{id},
        data:{
            resume,
            status:true
        }
    })
}

export function updateMovieDB(id: number) {

    return prisma.movies.update({
        where:{id},
        data:{
            status:true
        }

    })
}

export function updateUnsawMovieDB(id: number) {

    return prisma.movies.update({
        where:{id},
        data:{
            resume:null,
            status:false
        }
    })
}

export function getSeenMoviesDB() {

    return db.query(`SELECT m.title, s.name AS streamer, g.name AS genre , m.resume
                    FROM movies m 
                    LEFT JOIN streamer s ON m.streamer = s.id 
                    LEFT JOIN genre g ON m.genre = g.id
                    WHERE m.status = true `)
}