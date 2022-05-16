import Router from 'koa-router'

import {getAllUsers,createNewUser,changePassword,login} from './user/user.router'
import {getAllMatch,getMatchsByRegion,getMatchsByCity,getMatchById,createNewMatch,updateMatch,deleteMatch,linkUserWithMatchFirstTeam,linkUserWithMatchSecondTeam,getAllUsersInMatch,getMatchsByUser,checkUserInMatch} from './match/match.router'
import { getCitiesForRegions} from './location/location.router'
const router = new Router()



// Location

router.get('/api/location/allcities',getCitiesForRegions)


//Users

//Muestra todos los usuarios en la bd
router.get('/api/users',getAllUsers)


//Crea un usuario recibe firstName, lastName, email, password
router.post('/api/users/register',createNewUser)

//Hay que pasarle email y password y devolvera un token para autenticar todas las demas rutas
router.post('/api/users/login',login)

//Reinicia la clave de un usuario mediante post solo recibe el email
router.post('/api/users/resetpassword',changePassword)


//Matches
// Obtiene todos los match
router.get('/api/match',getAllMatch)

// Obtiene los match por region
router.get('/api/match/region/:region',getMatchsByRegion)
// Obtiene los match por ciudad
router.get('/api/match/city/:city',getMatchsByCity)

// Obtener partidos dueños
router.get('/api/match/user',getMatchsByUser)

//Obtiene el match por su id
router.get('/api/match/:id',getMatchById)

// Se le envian todos los datos al match para crearlo
router.post('/api/match',createNewMatch)
// Se sobreescriben los datos del match
router.put('/api/match',updateMatch)
// Se elminina el match por id
router.delete('/api/match/:id',deleteMatch)

router.post('/api/match/linkuserwithmatch/1',linkUserWithMatchFirstTeam)

router.post('/api/match/linkuserwithmatch/2',linkUserWithMatchSecondTeam)

router.post('/api/match/users',getAllUsersInMatch)

router.post('/api/match/user/checkexist',checkUserInMatch)

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
