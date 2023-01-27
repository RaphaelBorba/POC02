# Project Title

This project is use to show witch movies you have seen and resumes that you can make about it.

## Getting Started

You must install all dependencies with:
```
    npm install
```

And run the code with:
```
    npm run start
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
