import {createNewMatch,updateMatch,deleteMatch,Match} from './../../models/match.models'
import { User_Match } from '../../models/user_match.models'

import {jwtSecret} from './../../index'
import jwt from'jwt-simple'
import { User } from '../../models/user.models'



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
        return {"message":"No se han encontrado partidos por region",match}
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

exports.createNewMatch = async (matchData,authorization) => {
    let token = authorization
    let payload = jwt.decode(token.split(' ')[1], jwtSecret);
    console.log(payload)
    const match = { 
        nameMatch: matchData.nameMatch,
        nameSoccerField: matchData.nameSoccerField,
        firstTeamName: matchData.firstTeamName,
        secondTeamName: matchData.secondTeamName,
        numberOfPlayers: matchData.numberOfPlayers,
        region: matchData.region,
        city: matchData.city,
        location: matchData.location,
        owner: payload.id
    }
    return await createNewMatch(match.nameMatch,match.nameSoccerField,match.firstTeamName,match.secondTeamName,match.numberOfPlayers,match.region,match.city,match.location,match.owner)
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

exports.linkUserWithMatchFirstTeam=  async (matchData,authorization) =>{
    let token = authorization
    let payload = jwt.decode(token.split(' ')[1], jwtSecret);
    const match = {id: matchData.id, team:matchData.team}
    let team = await User_Match.create({userId: payload.id, matchId: match.id,team:1})
    if (team) {
        return "Usuario añadido correctamente a un equipo"
    }else{
        return "Error añadiendo un usuario a un equipo"
    }
    
}
exports.linkUserWithMatchSecondTeam =  async (matchData,authorization) =>{
    let token = authorization
    let payload = jwt.decode(token.split(' ')[1], jwtSecret);
    const match = {id: matchData.id, team:matchData.team}
    let team = await User_Match.create({userId: payload.id, matchId: match.id,team:2})
    if (team) {
        return "Usuario añadido correctamente a un equipo"
    }else{
        return "Error añadiendo un usuario a un equipo"
    }
}

exports.getAllUsersInMatch = async(matchData) =>{
    let matchs = await User_Match.findAll({where:{matchId: matchData.id}})
    let data = { "match": await Match.findOne({where:{id: matchData.id}}), "firstTeam":[],"secondTeam":[],}
    for (const match of matchs) {
        if (match.team == 1){
            data.firstTeam.push(await User.findOne({where:{id:match.userId},attributes: ['id','firstName','lastName'] }))
        }else{
            data.secondTeam.push(await User.findOne({where:{id:match.userId},attributes: ['id','firstName','lastName']}))
        }
        
    }
    return data
}