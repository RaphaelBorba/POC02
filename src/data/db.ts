import pg from "pg";

const {Pool} = pg

export const db = new Pool({
    connectionString: 'postgres://postgres:rr123456@localhost:5432/movies'
})