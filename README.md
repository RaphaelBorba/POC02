# Project Title

This project is use to show which movies have you seen and create resumes about the movies.

## Getting Started

- You must install all dependencies with:
```
    npm install
```

- Create your database doesn't matter the name


- Create your .env:
```
    DATABASE_URL="postgresql://postgres:password@host:5432/database?schema=public"
```

- Run prisma migrate:
```
    npx prisma migrate dev
```

- Populate your database:
```
    npx prisma db seed
```

- And run the code with:
```
    npm start
```


### Usage

Routes describe:

- Genre:

    Post: /genre  </br>
    Body: { name : Action }

    Delete: /genre/:id </br>
    Params: Id

    Get: /genre

- Streamer:

    Post: /streamer  </br>
    Body: { name : Netflix }

    Delete: /streamer/:id </br>
    Params: Id

    Get: /streamer

- Movies:

    Get: /movies

    Post: /movies </br>
    Body: { title: Lord of Rings, genre: 1, streamer: 2 }

    Delete: /movies/:id</br>
    Params: id

    Post(Update): /movies/saw/:id</br>
    Body(Optional): {resume: Best film of my life}
    

    Post(Update): /movies/unsaw/:id </br>
    Body: null

    Get: /movies/seen
