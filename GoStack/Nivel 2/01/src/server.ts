import express, { json, response } from 'express'
import routes from './routes/index'

const app = express()

const port = 3333

app.get('/', ( Request, Response) => {
    return Response.json('Hello World')
})

app.listen(port, () => {
    return (console.log(`Listenin' on localhost:${3333}`))
})
