import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-body'
import {pathToRegexp} from 'path-to-regexp'
import router from './routes/index'
import {connectDB} from './db'
import { createtableUser } from './models/user.models'
import { createtableMatch } from './models/match.models'

import Koajwt from 'koa-jwt'

import jwt from'jwt-simple'


connectDB()
createtableUser()
createtableMatch()

const app = new Koa()
app.use(cors())


const port = 3000

app.use(bodyParser({ multipart: true, urlencoded: true }))


// Custom 401 handling if you don't want to expose koa-jwt errors to users
app.use(function(ctx, next){
    return next().catch((err) => {
        if (401 == err.status) {
            ctx.status = 401;
            ctx.body = 'Recurso Protegido, use el encabezado de Authorizacion (Authorization) para obtener acceso\n';
        } else {
            throw err;
        }
    });
});

const jwtSecret = 'jwtSecret'
const unprotected = [
    pathToRegexp('/api/users/login'),pathToRegexp('/api/users/register'),pathToRegexp('/api/users/resetpassword')
];
app.use(Koajwt({secret:jwtSecret}).unless({
    path:unprotected
}))

app.use(router.routes())


app.listen(3000, () => {
    console.log(`Server is running on port ${port}`)
})
