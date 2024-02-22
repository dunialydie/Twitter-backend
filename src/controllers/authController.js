const passport=require('passport');
const jwtStrategy=require('passport-jwt').Strategy;
const ExtractJwt=require('passport-jwt').ExtractJwt;
const jwt=require('jsonwebtoken');
const{PrismaClient} = require('@prisma/client');
const prisma=new PrismaClient();
const bcrypt=require('bcrypt')

/**Création/ajout des utilisateurs dans la bdd */
async function createUser(user) {
    try{
      await prisma.user.create({data:user})
    }catch(e){
          throw e
    }finally{
         prisma.$disconnect()
    }
  }

/**Fonction de connexion des utilisateurs*/

async function login(email, password){
    const user= await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if(!user){
        throw new error('user not found');
    }

    const isvalid = await bcrypt.compare(password, user.password);

    if(!isvalid){
        throw new error('invalid passord');
    }

    const {password: userPassword, ...userInfo} = user;
    return userInfo
}

//ma stratégie
// const jwtOptions={
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: process.env.JWT_SECRET
// }
// const PasspotConfig=(passport)=>{
//     passport.use(new jwtStrategy(jwtOptions, async (jwt_payload, done)=>{
//         try{
//             const user= await prisma.user.findUnique({
//                 where: {id: jwt_payload.id},
//             });
//             if(user){
//                 return done(null,user)
//             }
//             return done(null,false)
//         }catch(error){
//             console.log(error);
//             return done(error,false);
//         }
//     }))
// }
    


module.exports={createUser, login}