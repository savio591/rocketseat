import express from 'express'
import routes from './routes/index'

const app = express()

app.use(routes)
app.use(express.json());

const port = 3333


app.listen(port, () => {
    return (console.log(`Listenin' on localhost:${3333}`))
})
