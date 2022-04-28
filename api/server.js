// Configuración del server

const express = require("express");
const app = express();
const morgan = require("morgan"); //MIDDLEWARE
const routes = require("./routes");
const db = require("./config/db");
const User = require("./models/Users");
const cookieParser = require("cookie-parser");
const sessions = require("express-session")
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());

app.use(sessions({ secret: "bootcamp", resave: true, saveUninitialized: true })); // --> check this out

app.use(passport.initialize());
app.use(passport.session());

app.use("/api", routes)

passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password"
        },
        function (email, password, done) {
            User.findOne({ where: { email } })
                .then(user => {
                    //console.log(user);
                    if (!user) { 
                        return done(null, false);
                    }
                    user.hash(password, user.salt).then((hash) => {
                        if (hash !== user.password) {
                            return done(null, false);
                        }
                        return done(null, user); //se autenticó
                    });
                })
                .catch(done);
        }
    )
);


//this is how the cookie will identify the user
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

// How we look for the user
passport.deserializeUser(function (id, done) {
    User.findByPk(id)
        .then(user => done(null, user))
});


db.sync({ force: false }).then(() => {  //db.sync o User.sync ? review de passport está con db
    app.listen(3001, () => {
        console.log("servidor corriendo en el puerto 3001")
    });
});

