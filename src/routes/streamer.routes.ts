import { createStreamer, deleteStreamerById, getStreamers } from "../controllers/streamer.controllers";
import { Router } from "express";
import { validateStreamerById, validateStreamerByName } from "../middlewares/streamer.middleware";

const streamerRouter = Router()

streamerRouter
.get('/streamer', getStreamers)
.post('/streamer', validateStreamerByName, createStreamer)
.delete('/streamer/:id', validateStreamerById, deleteStreamerById)


export {streamerRouter}