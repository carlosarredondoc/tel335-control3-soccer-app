import Router from 'koa-router'

import {getAllUsers,createNewUser,changePassword,login} from './user/user.router'
import {getAllMatch,createNewMatch,updateMatch} from './match/match.router'
const router = new Router()




//Users

//Muestra todos los usuarios en la bd
router.get('/api/users',getAllUsers)


//Crea un usuario recibe firstName, lastName, email, password
router.post('/api/users/register',createNewUser)

//Hay que pasarle email y password y devolvera un token para autenticar todas las demas rutas
router.post('/api/users/login',login)

//Reinicia la clave de un usuario mediante post solo recibe el token
router.post('/api/users/resetpassword',changePassword)


//Matches

router.get('/api/matches',getAllMatch)
router.post('/api/matches',createNewMatch)
router.put('/api/matches',updateMatch)

/*
router.get('/api/users/userInfo', ctx => {
    let token = ctx.header.authorization
 
    ctx.body = {
        token:token,
        user:ctx.state.user
    }
 
         // Use JWT-Simple para analizar datos
   let payload = jwt.decode(token.split(' ')[1], jwtSecret);
   if (payload.exp < Date.now()) {
       console.log('Token Expirado')
   }
    console.log(payload)
})
*/


//router.put('/api/user', users.createUser)
//router.delete('/api/user/:rol', users.removeUser)

export default router
