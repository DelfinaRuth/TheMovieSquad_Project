const express = require("express");
const router = express.Router();

const User = require("../models/Users");
const Favs = require("../models/Favs");

const passport = require("passport");

//----------------------------------------------//
//RUTA PARA REGISTRAR UN USER 
router.post("/register", (req, res, next) => {

  User.create({
    email: req.body.email,
    password: req.body.password
  })
    .then(user => res.send(user))
    .catch(next);
  console.log("funciona la ruta REGISTER")
});

//---------------------------------------------//
//RUTA PARA LOGUEAR UN USER
router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log(req.body.email)
  User.findOne({
    where: { email: req.body.email },
    attributes: {
      exclude: ["password", "salt"],
    },
  }).then(user => {
    res.send(user)})
})

//-----------------------------------------//
//RUTA PARA LLAMAR TODOS LOS USERS
router.get('/users', (req, res, next) => {
  User.findAll({})
    .then((users) => res.send(users))
    .catch(next);
  console.log("encontró a los users")
});

//-----------------------------------------//
//RUTA PARA DESLOGUEAR UN USER
router.post("/logout", (res, req) => {
  req.logOut();
  res.sendStatus(200);
});

//-----------------------------------------//
//PENDING
//ruta para que persistan los datos --> se maneja desde el front useEffect(axios.get(/api/me)) 
router.get("/me", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  res.send(req.user);
})

//+++++++++++++++++++++++++++++++++++++++++++++//
//FAVS

router.post("/favs", (req, res, next) => {
  // Favs.create({
  //   movie: req.body.movie,
  //   idTmdb: req.body.idTmdb
  // })
  //   .then(user => res.send(user))
  //   .catch(next);
  console.log("req.body-->", req.body)
});

// router.get("/favs", (req, res, next) => {
//   Favs.findAll()
//     .then((movies) => res.send(movies))
//     .catch(next);
// });


// router.get("/:id", (req, res, next) => {
//   Favs.findAll({ where: { authorId: req.params.id } }).then((movie) =>
//     res.send(movie)
//   );
// });

//+++++++++++++++++++++++++++++++++++++++++++++//

//si no le llega ningún pedido a la ruta, entonces tira error, es p verlo más gráfico en el front.
router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;

