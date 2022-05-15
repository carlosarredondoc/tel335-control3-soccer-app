import {createNewMatch,updateMatch,deleteMatch,Match} from './../../models/match.models'

exports.getAllMatch = async () => {
    return await Match.findAll()
}

exports.getMatchById = async (matchData) => {
    let match = await Match.findOne({where:{id:matchData.id}})
    if (match){
        return {"message":"Partido Encontrado",match}
    }else {
        return "El Partido No existe"
    }
}

exports.getMatchsByRegion = async (matchData) => {
    let match = await Match.findAll({where:{region :matchData.region}})
    if (match!=0) {
        return {"message":"Partidos Encontrados",match}
    }else {
        return {"No se han encontrado partidos por region",match}
    }

}
exports.getMatchsByCity = async (matchData) => {
    let match = await Match.findAll({where:{city: matchData.city}})
    if (match!=0) {
        return {"message":"Partidos Encontrados",match}
    }else {
        return {"message":"No se han encontrado partidos por ciudad",match}
    }

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

exports.deleteMatch = async (matchData) => {
    const match = { 
        id: matchData.id
    }
    return await deleteMatch(match.id)

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
