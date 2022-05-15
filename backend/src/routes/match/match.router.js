import matchActions from '../../actions/match/match.actions'

exports.getAllMatch = async (ctx) => {
    ctx.body = await matchActions.getAllMatch()
    return ctx
}

exports.createNewMatch = async (ctx) => {
    let message = await matchActions.createNewMatch(ctx.request.body)
    ctx.body = { message }
    return ctx
}

exports.updateMatch = async (ctx) => {
    let {message,token} = await matchActions.updateMatch(ctx.request.body)
    ctx.body = { message,token}
    return ctx
}

/*
exports.removeUser = (ctx) => {
    userActions.removeUser(ctx.params.rol)
    ctx.body = { message: 'User was removed' }
    return ctx
}
*/
