import Router from 'koa-router'
import getHealth from './health/health'
import {getAllUsers} from './user/user.router'

const router = new Router()

router.get('/health', getHealth)

router.get('/api/users',getAllUsers)
//router.put('/api/user', users.createUser)
//router.delete('/api/user/:rol', users.removeUser)

export default router
