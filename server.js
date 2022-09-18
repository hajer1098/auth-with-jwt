const express = require('express');
const jwt = require("jsonwebtoken");
const bodyParser=require('body-parser')

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())




let secretKey = "121212";

const data = [{
    film: "titanic",
    year: 1991,
},
{
    film: "silent hill",
    year: 2016,
},

];


function createToken(req, res, next) {
    const user = { username: req.body.username }//user={username:"hajer"}
    jwt.sign(user, secretKey, (err, resultat) => {
        if (err) {
             res.json({ error: err })
             }
             else{
                 res.json({token:resultat})
             }

    });
   next();
}


app.post("/login", createToken,(req, res) => {});





// app.get('/data/:id',(req,res)=>{

//     if(req.params.id==secretCode)
//     {
//           res.json(data)
//      }
//      else{
//         res.json({error:"vous netes pas autorisé a effectue cette tache"})
//         // res.status(500).json({ error: 'message' })
//         // res.status(500).json({error: 'Ha Ocurrido un error'});
//         console.log('erooooor');
//      }
// })




app.listen(5000, () => {
    console.log("server en marche !!");
})