import prisma from "../data/database";
import { db } from "../data/db";


export function createStreamerDB(name: string) {

    return prisma.streamer.create({
        data:{name}
    })
}

export function getStreamersDB(){

    return prisma.streamer.findMany();
}

export function deleteStreamerByIdDB(id: number){

    return prisma.streamer.delete({
        where:{id}
    })
}

export function checkStreamerByIdDB(id:number){

    return prisma.streamer.findFirst({
        where:{
            id
        }
    })
}

export function checkStreamerBynameDB(name:string){

    return prisma.streamer.findFirst({
        where:{name}
    })
}