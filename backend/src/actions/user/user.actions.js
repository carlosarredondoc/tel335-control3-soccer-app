import { createNewUser,resetPassword,User } from '../../models/user.models'
const jwtSecret = 'jwtSecret'
const tokenExpiresTime = 1000 * 20  * 60 * 24 * 7
import jwt from'jwt-simple'


exports.getAllUsers = async () => {
    return await User.findAll()
}

exports.addUser = async (userData) => {
    const user = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password
    }
    return await createNewUser(user.firstName,user.lastName,user.email,user.password)
}

exports.changePassword = async (userData) => {
    const user = {
        email: userData.email
    }
    return await resetPassword(user.email)
}

exports.login = async (userData) => {
    const user = await User.findOne({where: {email: userData.email}})
    //console.log(user)
    
    if (user && user.email && await user.compareHash(userData.password)){
        let payload = {
            exp:Date.now() + tokenExpiresTime,
            id:user.id
        }
        let token = jwt.encode(payload, jwtSecret)
 
        return {"message":"Login exitoso",token}
    }else {
        userData = "Email O Contraseña Incorrecta"
    }
    return userData
}


/*
exports.removeUser = (userRol) => {
    users = users.filter((user) => {  
        return user.rol !== userRol
    })
}
*/
