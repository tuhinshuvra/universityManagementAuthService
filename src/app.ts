import express, { Application, Request, Response } from 'express';
import cors from 'cors'
const app: Application = express()
const port = 3000

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Testing db connection
app.get("/", (req: Request, res: Response) => {
    res.send('University Management DB is running........')
})



export default app;

