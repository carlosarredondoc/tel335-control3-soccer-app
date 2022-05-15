import { DataTypes } from 'sequelize';
import { sequelize } from '../db';
import bcrypt from 'bcrypt'
import { randomFullName} from '../utilities/generateUser';
import { Match } from './match.models';

export const User = sequelize.define('User', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  hashPassword: {
    allowNull: false,
    type: DataTypes.STRING,
  },
},{
  timestamps: false
})

User.belongsTo(Match,{
  through:'userid',
})
Match.belongsTo(User,{ 
  through:'userid',
 })

User.prototype.compareHash = async function(password) {
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
  const user = await User.findOne({hashPassword:hash},{
    where: { email },
  })
  if(!user){
    return "No existe un usuario asociado al correo"
  }else {
    return "Contraseña reiniciada a 12345"
  }
}




export const createNewUser = async (firstName,lastName,email,password) => {
  let user = await User.findOne({
    where: { email },
  })
  if (!user) {
    let pass = await createHashPassword(password)
    user = await User.create({ firstName, lastName,email, hashPassword: pass})
    if (user){
      return'El usuario ha sido creado'
    }

  }else{
    return "Usuario Existente"
  }
}



export const createtableUser = async () => {
  await User.sync({ force: true })
  console.log("La tabla del modelo User ha sido creada o recreada");
  await createNewUser('Nombre_Profesor','Apellido_Profesor','profesor@soccerapp.cl','12345')
  await createNewUser('Nombre_Ayudante','Apellido_Ayudate','ayudante@soccerapp.cl','12345')
  for (let N=0; N<10;N++){
    let randomFullNameGenerated = await randomFullName()
    let firstName = randomFullNameGenerated.split(' ')[0]
    let lastName = randomFullNameGenerated.split(' ')[1]
    let email = firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@soccerapp.cl'
    await createNewUser(firstName,lastName,email,'12345')
  }
  
  /*
  const user = await User.findOne({
    where: { email: 'profesor@soccerapp.cl' },
  });
  console.log(await user.compareHash('123'))
  */
}