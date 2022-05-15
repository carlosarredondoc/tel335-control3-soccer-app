import userActions from '../../actions/user/user.actions'

exports.getAllUsers = async (ctx) => {
    ctx.body = await userActions.getAllUsers()
    return ctx
}

exports.createNewUser = async (ctx) => {
    let message = await userActions.addUser(ctx.request.body)
    ctx.body = { message }
    return ctx
}

exports.changePassword = async (ctx) => {
    let message = await userActions.changePassword(ctx.request.body)
    ctx.body = { message}
    return ctx
}

exports.login = async (ctx) =>{
    let message = await userActions.login(ctx.request.body)
    if (message['message']){
        ctx.body = {"message":message.message, 'token':message.token}
    }else{
        ctx.body = {message}
    }
    return ctx
}

