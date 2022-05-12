import { DataTypes } from 'sequelize';
import { sequelize } from '../db';
import bcrypt from 'bcrypt'
import { randomFullName} from '../utilities/generateUser';

export const User = sequelize.define('User', {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  hashPassword: DataTypes.STRING,
});

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
  const hash = await createHashPassword('123456') 
  const user = await User.findOne({hashPassword:hash},{
    where: { email },
  })
}




export const createNewUser = async (firstName,lastName,email,password) => {
  let pass = await createHashPassword(password)
  await User.create({ firstName, lastName,email, hashPassword: pass})
}



export const createtableUser = async () => {
  await User.sync({ force: true })
  console.log("La tabla del modelo User ha sido creada o recreada");
  await createNewUser('Nombre_Profesor','Apellido_Profesor','profesor@soccerapp.cl','123456')
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