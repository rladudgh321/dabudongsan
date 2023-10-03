const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');

const app = express();

dotenv.config();
app.set('port', process.env.NODE_ENV || 3065);
app.use(morgan('dev'));

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure:false
    },
}));


const { sequelize } = require('./models');
sequelize.sync({ force: false })
    .then(()=>{
        console.log('DB연결 성공');
    })
    .catch((err) => {
        console.error(err);
    });

//passport
const passport = require('passport');
const passportConfig = require('./passport');
passport.initialize();
passport.session();
passportConfig();

//router

app.get('/', (req,res,next)=>{
    res.send('hello express');
})

const userRouter = require('./routes/user');
app.use('/user', userRouter);

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 대기 중');
})