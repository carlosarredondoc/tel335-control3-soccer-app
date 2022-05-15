import matchActions from '../../actions/match/match.actions'

exports.getAllMatch = async (ctx) => {
    ctx.body = await matchActions.getAllMatch()
    return ctx
}
exports.getMatchById = async (ctx) => {
    let {message,match} = await matchActions.getMatchById(ctx.params)
    ctx.body = {message, match}
    return ctx
}

exports.getMatchsByRegion = async(ctx) =>{
    let {message,match} = await matchActions.getMatchsByRegion(ctx.params)
    ctx.body = {message, match}
    return ctx
}
exports.getMatchsByCity= async(ctx) =>{
    let {message,match} = await matchActions.getMatchsByCity(ctx.params)
    ctx.body = {message, match}
    return ctx
}

exports.createNewMatch = async (ctx) => {
    let message = await matchActions.createNewMatch(ctx.request.body,ctx.header.authorization)
    ctx.body = { message }
    return ctx
}
exports.deleteMatch = async (ctx) => {
    let message = await matchActions.deleteMatch(ctx.params)
    
    ctx.body = { message }
    return ctx
}

exports.updateMatch = async (ctx) => {
    let message = await matchActions.updateMatch(ctx.request.body)
    ctx.body = { message}
    return ctx
}

exports.linkUserWithMatchFirstTeam = async (ctx) =>{
    let message = await matchActions.linkUserWithMatchFirstTeam(ctx.request.body,ctx.header.authorization)
    ctx.body = { message}
    return ctx
}
exports.linkUserWithMatchSecondTeam = async (ctx) =>{
    let message = await matchActions.linkUserWithMatchSecondTeam(ctx.request.body,ctx.header.authorization)
    ctx.body = { message}
    return ctx
}

exports.getAllUsersInMatch= async (ctx) =>{
    let message = await matchActions.getAllUsersInMatch(ctx.request.body)
    ctx.body = message
    return ctx
}


/*
exports.removeUser = (ctx) => {
    userActions.removeUser(ctx.params.rol)
    ctx.body = { message: 'User was removed' }
    return ctx
}
*/
