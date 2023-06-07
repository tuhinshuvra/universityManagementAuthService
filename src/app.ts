



import express, { Application, Request, Response } from 'express'
import cors from 'cors';
import usersService from './app/modules/users/users.service';
const app: Application = express()
import userRouter from './app/modules/users/users.route';

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Routes
app.use('/api/v1/users/', userRouter)

// Testing db connection
app.get('/', async (req: Request, res: Response) => {
  await usersService.createUser({
    id: "999",
    password: "1234",
    role: "student"
  })

  res.send('University Management DB is running........')
})

export default app
