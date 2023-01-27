import prisma from "../data/database";
import { db } from "../data/db";


export function createGenreDB(name: string) {

    return prisma.genre.create({
        data:{name: name.toLowerCase()}
    })
}

export function checkGenreByNameDB(name: string) {
    
    return prisma.genre.findFirst({where:{name: name.toLowerCase()}})
}

export function checkGenreByIdDB(id: number) {
    
    return prisma.genre.findUnique({ where : {id}})
}

export function deleteGenreByIdDB(id:number){

    return prisma.genre.delete({
        where: {id}
    })
}

export function getGenresDB(){

    const promise = prisma.genre.findMany();
    return promise
}