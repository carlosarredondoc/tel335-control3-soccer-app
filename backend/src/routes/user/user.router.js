import userActions from '../../actions/user/user.actions'

exports.getAllUsers = async (ctx) => {
    ctx.body = await userActions.getUsers()
    return ctx
}

exports.createUser = (ctx) => {
    userActions.addUser(ctx.request.body)
    ctx.body = { message: 'El usuario ha sido creado' }
    return ctx
}
/*
exports.removeUser = (ctx) => {
    userActions.removeUser(ctx.params.rol)
    ctx.body = { message: 'User was removed' }
    return ctx
}
*/
