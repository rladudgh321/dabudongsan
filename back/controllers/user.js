const passport = require('passport');
const bcrypt = require('bcrypt');
const { User } = require('../models');

exports.login = (req,res,next) => {
    passport.authenticate('local', (err,user,info) => {
        if(err) {
            console.error(err);
            return next(err);
        }
        // if(!info) {
        //     return res.status(401).send(info.message);
        // }        
        return req.login(user, (err) =>{
            if(err) {
                console.error(err);
                next(err);
            }
            return res.json(user);
        });
    })(req,res,next);
}

exports.logout = async (req,res) => {
    req.logout((err)=>{
        req.session.destroy();
        if(err) {
            res.redirect('/');
        } else {
            res.status(200).send('server:logout.ok');
        }
    });
    
    // return res.send('ok');
}

exports.join = async (req,res,next) => {
    const { joinEmail, joinPwd } = req.body;
    try {
        const exUser = await User.findOne({ where: { ids: joinEmail } });
        if(exUser) {
            return res.status(401).send('이미 존재하는 사용자 주소입니다');
        }
        const result = await bcrypt.hash(joinPwd, 12);
        const user = await User.create({
            ids:joinEmail,
            password: result,
        });
        const userWithoutPassword = await User.findOne({
            where: { id:user.id },
            attributes:['ids'],
        });
        res.status(201).json(userWithoutPassword);
    } catch (err) {
        console.error(err);
        next(err);
    }
}


/*

app.get('/protected', function(req, res, next) {
  passport.authenticate('local', function(err, user, info, status) {
    if (err) { return next(err) }
    if (!user) { return res.redirect('/signin') }
    res.redirect('/account');
  })(req, res, next);
});
*/