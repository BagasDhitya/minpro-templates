import express, { Application, Request, Response } from 'express'
import { TodoRouter } from './routers/todo.router'
import cors from 'cors'

class App {
    public app: Application

    constructor() {
        this.app = express()
        this.initMiddlewares()
        this.initRoutes()
    }

    private initMiddlewares() {
        this.app.use(cors({
            origin: process.env.FRONTEND_URL || '*'  // jangan fix ke localhost
        }))
        this.app.use(express.json())
    }

    private initRoutes() {
        this.app.use('/api/todos', TodoRouter)
        this.app.get('/', (req: Request, res: Response) => {
            res.status(200).send({ message: 'hello world' })
        })
    }
}

// ✅ Export app untuk Vercel
const server = new App()
export default server.app
