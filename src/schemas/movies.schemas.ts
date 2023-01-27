import Joi from "joi";

export const GenreOrStreamerSchema = Joi.object({
    name: Joi.string().required()
})

export const MoviesSchema = Joi.object({
    title: Joi.string().required(),
    genre: Joi.number().required(),
    streamer: Joi.number().required(),
    resume: Joi.string()
})
export const ResumeSchema = Joi.object({
    resume: Joi.string()
})