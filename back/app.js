const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const nunjucks = require('nunjucks');
const cors = require('cors');

dotenv.config();
const app = express();
app.set('view engine', 'html');

app.set('port', process.env.NODE_ENV || 3065);
nunjucks.configure('template', {
    express: app,
    watch: true,
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(morgan('dev'));
app.use(cors({
    origin: true,
    credentials:true,
}))

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
app.use(passport.initialize());
app.use(passport.session());
passportConfig();

//router

const userRouter = require('./routes/user');
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.render('hi.html');
});


app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 대기 중');
})