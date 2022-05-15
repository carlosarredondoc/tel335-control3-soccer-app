import {createNewMatch,updateMatch,Match} from './../../models/match.models'

exports.getAllMatch = async () => {
    return await Match.findAll()
}
exports.createNewMatch = async (matchData) => {
    const match = { 
        nameMatch: matchData.nameMatch,
        nameSoccerField: matchData.nameSoccerField,
        firstTeamName: matchData.firstTeamName,
        secondTeamName: matchData.secondTeamName,
        numberOfPlayers: matchData.numberOfPlayers,
        region: matchData.region,
        city: matchData.city,
        location: matchData.location}
    return await createNewMatch(match.nameMatch,match.nameSoccerField,match.firstTeamName,match.secondTeamName,match.numberOfPlayers,match.region,match.city,match.location)
}



exports.updateMatch = async (matchData) => {
    const match = { 
        id: matchData.id,
        nameMatch: matchData.nameMatch,
        nameSoccerField: matchData.nameSoccerField,
        firstTeamName: matchData.firstTeamName,
        secondTeamName: matchData.secondTeamName,
        numberOfPlayers: matchData.numberOfPlayers,
        region: matchData.region,
        city: matchData.city,
        location: matchData.location}
    return await updateMatch(match.id,match.nameMatch,match.nameSoccerField,match.firstTeamName,match.secondTeamName,match.numberOfPlayers,match.region,match.city,match.location)

}
