import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-body'
import router from './routes/index'
import {connectDB} from './db'
import { createtableUser } from './models/user.models'

//connectDB()
//createtableUser()

const app = new Koa()
app.use(cors())


const port = 3000

app.use(bodyParser({ multipart: true, urlencoded: true }))
app.use(router.routes())

app.listen(3000, () => {
    console.log(`Server is running on port ${port}`)
})
