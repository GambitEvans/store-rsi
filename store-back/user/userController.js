const userService = require('./userService');

async function singIn(req, res) {
    const userData = await userService.singIn(req.body);
    console.log(userData);
    if(userData) {
        return res.json({
            status: 200, 
            data: userData});
    }
    return res.json({
        status:200, 
        mensagem: "Username or password is invalid" });
}

async function singUp(req, res) {
    try {
        const user = await userService.singUp(req.body);
        console.log('doideira');
        console.log(user);
        if(user) {
            return res.json({
                status: 200, 
                data: user });
        } else {
            console.log('User already exists');
            return res.json({
                status: 400,
                message: 'User already exists'
            })
        }
    } catch(err) {
        console.log(err);
        return res.json({
            status: 500, 
            message:err });
    } 
}

module.exports = {
    singIn,
    singUp
}