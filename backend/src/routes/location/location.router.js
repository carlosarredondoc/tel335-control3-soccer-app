import locationActions from './../../actions/location/location.actions'

exports.getCitiesForRegions = async (ctx) => {
    ctx.body = await locationActions.getCitiesForRegions()
    return ctx
}
