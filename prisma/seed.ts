import prisma from '../src/data/database'

async function settleGenre() {

    await prisma.genre.createMany({
        data:[
            {
              name: 'terror'
            },
            {
              name: 'suspense'
            },
            {
              name: 'ficção'
            },
            {
              name: 'ação'
            }
          ]
    })
}

async function settleStreamer() {
    
    await prisma.streamer.createMany({
        data:[
            {
              name: 'hbo'
            },
            {
              name: 'netflix'
            },
            {
              name: 'amazon'
            }
          ]
    })
}

async function settleMovies(){

    await prisma.movies.createMany({
        data:[
            {
              title: "Senhor dos aneis",
              genre: 3,
              streamer: 1,
              status: false,
              resume: null
            },
            {
              title: "Homem aranha",
              genre: 4,
              streamer: 2,
              status: false,
              resume: null
            },
            {
              title: "Hulk",
              genre: 2,
              streamer: 3,
              status: true,
              resume: "Filme do verdão"
            },
            {
              title: "Batman",
              genre: 1,
              streamer: 2,
              status: false,
              resume: null
            }
          ]
    })
}

settleGenre().then(()=>{
    
    console.log('Genre add;')

    settleStreamer().then(()=>{

        console.log('Streamer add;')

        settleMovies().then(()=>{

            console.log('Movie add;')

        }).catch( (e) => {
            console.error(e)
            process.exit(1)
        })
    }).catch( (e) => {
        console.error(e)
        process.exit(1)
    })
}).catch( (e) => {
    console.error(e)
    process.exit(1)

}).finally(async () => {
    await prisma.$disconnect()
})