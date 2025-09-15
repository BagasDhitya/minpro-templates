import express, { Application, Request, Response } from 'express'
import { TodoRouter } from './routers/todo.router'
import cors from 'cors'

class App {
    private app: Application
    private port: number

    constructor(port: number) {
        this.port = port
        this.app = express()

        this.initMiddlewares()
        this.initRoutes()
    }

    private initMiddlewares() {
        this.app.use(cors({
            origin: 'http://localhost:3000'
        }))
        this.app.use(express.json())
    }

    private initRoutes() {
        this.app.use('/api/todos', TodoRouter)
        this.app.use('/', (req: Request, res: Response) => {
            res.status(200).send({ message: 'hello world' })
        })
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running at http://localhost:${this.port}`)
        })
    }
}

const server = new App(8000)
server.listen()