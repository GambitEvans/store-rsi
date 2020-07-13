const UserSchema = require('./user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

async function singIn(user) {
    const returnedUser = await UserSchema.findOne({name: user.name}).select('_id name password').lean();
    if (returnedUser) { 
        if(await bcrypt.compareSync(user.password, returnedUser.password)) {
            const answerUser = {
                _id: returnedUser._id,
                name: returnedUser.name,
                token: jwt.sign({
                    jwtPayload: returnedUser._id }, 
                    process.env.JWT_SECRET, 
                    { expiresIn: 100000000 })
            }
            return answerUser;
        }
    }
    return null;
}

async function singUp(user) {
    const userDb = await UserSchema.findOne({name: user.name}).select('_id name password').lean();
    if(!userDb){
        user.password = await bcrypt.hashSync(user.password, 10);
        return UserSchema.create(user);
    } else {
        return null;
    }
}

module.exports = {
    singIn,
    singUp
};