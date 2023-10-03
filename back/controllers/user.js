const passport = require('passport');


exports.login = (req,res,next) => {
    passport.authenticate('local', (err,user,info) => {
        if(err) {
            console.error(err);
            return next(err);
        }
        if(!user) {
            return null;
        }
        return req.login(user, (err) =>{
            if(err) {
                console.error(err);
                next(err);
            }
            return res.send('ok');
        });
    })(req,res,next);
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