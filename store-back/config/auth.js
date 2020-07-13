const jwt = require('jsonwebtoken');
const util = require('util'); 
const dotEnv = require('dotenv');

dotEnv.config()

async function authenticate(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.json({
            status:400, 
            message:"A token is required"});
    }

    const [, token] = authorization.split(' ');
    try {
        await util.promisify(jwt.verify)(token,process.env.JWT_SECRET);
        return next();
    } catch(err) {
        console.log(err);
        return res.json({status:500, message:err});
    }
}

module.exports = {
    authenticate
};