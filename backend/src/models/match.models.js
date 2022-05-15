import { DataTypes } from 'sequelize';
import { sequelize } from '../db';
import { User } from './user.models';

export const Match = sequelize.define('Match', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  nameMatch: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  nameSoccerField: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  firstTeamName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  secondTeamName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  numberOfPlayers: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  region: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  city: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  location: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  owner: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
},{
  timestamps: false
});
/*
Match.prototype.compareHash = async function(password) {
  const result = await bcrypt.compare(password, this.hashPassword);
  return result
}

const createHashPassword = async (password)  =>{
  const salt = await bcrypt.genSaltSync(10)
  const hash = await bcrypt.hashSync(password, salt)
  return hash
}

export const resetPassword = async (email) => {
  const hash = await createHashPassword('12345') 
  const user = await Match.findOne({hashPassword:hash},{
    where: { email },
  })
  if(!user){
    return "No existe un usuario asociado al correo"
  }else {
    return "Contraseña reiniciada a 12345"
  }
}

*/





export const createNewMatch = async (nameMatch,nameSoccerField,firstTeamName,secondTeamName,numberOfPlayers,region,city,location,owner) => {
  let match = await Match.create({ nameMatch,nameSoccerField,firstTeamName,secondTeamName,numberOfPlayers,region,city,location,owner})
  if (match){
    return'El partido ha sido creado'
  }else{
    return "Error al crear el partido"
  }
}

export const updateMatch = async (id,nameMatch,nameSoccerField,firstTeamName,secondTeamName,numberOfPlayers,region,city,location,owner) => {
  let match = await Match.findOne({where: {id}})
  match.update({nameMatch,nameSoccerField,firstTeamName,secondTeamName,numberOfPlayers,region,city,location,owner})
  if (match){
    return'El partido ha editado exitosamente'
  }else{
    return "Error al editar el partido"
  }
}


export const createtableMatch = async () => {
  await Match.sync({ force: true })
  console.log("La tabla del modelo Match ha sido creada o recreada");
  await createNewMatch('Partido Callejero','Cancha Calle','Paltas','Platanos',11,'V region','La Calera','Calle 1')
  await createNewMatch('Partido Santiaguino','Cancha Pasto','Catolica','Colo Colo',11,'Metropolitana','Vitacura','Av Montt 342')
  //const user = await User.findOne({where:{id:1}})
  //const match = await Match.findOne({where:{id:1}})
  
  /*
  await createNewUser('Nombre_Ayudante','Apellido_Ayudate','ayudante@soccerapp.cl','123456')
  for (let N=0; N<10;N++){
    let randomFullNameGenerated = await randomFullName()
    let firstName = randomFullNameGenerated.split(' ')[0]
    let lastName = randomFullNameGenerated.split(' ')[1]
    let email = firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@soccerapp.cl'
    await createNewUser(firstName,lastName,email,'123456')
  
  }
  
  /*
  const user = await User.findOne({
    where: { email: 'profesor@soccerapp.cl' },
  });
  console.log(await user.compareHash('123'))
  */
}