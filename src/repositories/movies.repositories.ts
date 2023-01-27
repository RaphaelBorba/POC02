import { Movies } from "../protocols";
import { db } from "../data/db";


export function getMoviesDB() {
    const promise = db.query(`SELECT * FROM movies;`)
    return promise
}

export function checkMovieByNameDB(name: string) {

    return db.query(`SELECT * FROM movies WHERE title = ($1)`, [name.toLowerCase()])
}

export function createMovieDB(body: Movies) {

    return db.query(`INSERT INTO movies(title, genre, streamer, status) VALUES ($1,$2,$3,$4) `,
        [body.title.toLowerCase(), body.genre, body.streamer, false])
}

export function checkMovieByIdDB(id: string) {

    return db.query(`SELECT * FROM movies WHERE id = ($1)`, [id])
}

export function deleteMovieByIdDB(id: string) {

    return db.query(`DELETE FROM movies WHERE id = ($1)`, [id])
}

export function updateMovieWithResumeDB(id: string, resume: string) {

    return db.query(`UPDATE movies SET resume = $1, status = $2 WHERE id = $3`, [resume, true, id])
}

export function updateMovieDB(id: string) {

    return db.query(`UPDATE movies SET status = $1 WHERE id = $2`, [true, id])
}

export function updateUnsawMovieDB(id: string) {

    return db.query(`UPDATE movies SET status = $1, resume = $2 WHERE id = $3`, [false, null, id])
}

export function getSeenMoviesDB() {

    return db.query(`SELECT m.title, s.name AS streamer, g.name AS genre , m.resume
                    FROM movies m 
                    LEFT JOIN streamer s ON m.streamer = s.id 
                    LEFT JOIN genre g ON m.genre = g.id
                    WHERE m.status = true `)
}