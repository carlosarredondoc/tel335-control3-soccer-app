import { createNewUser,User } from '../../models/user.models'


exports.getUsers = async () => {
    return await User.findAll()
}

exports.addUser = (userData) => {
    const user = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        hashPassword: userData.password
    }
    createNewUser(user)
}

/*
exports.removeUser = (userRol) => {
    users = users.filter((user) => {  
        return user.rol !== userRol
    })
}
*/
