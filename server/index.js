﻿
// })
// const express= require("express");
// const app = express();
// app.get("/", function(req,res){
//     res.sendFile(__dirname+"/html/index.html");
// });
// //Model - Usuários
// const UsuariosSchema = mongoose.Schema({
//     nome:{
//         type: String,
//         require: true
//     },
//     email:{
//         type:String,
//         require: true
//     },
//     senha:{
//         type:String,
//         require:true
//     }

// })
// //Collection
// mongoose.model('usuarios', UsuariosSchema)
// const user = mongoose.model('usuarios')
// new user({
//     nome:"Beatriz",
//     email:"beatrizdacosta1@gmail.com",
//     senha:"123"
// }).save().then(() => {console.log("Salvou")}).catch((err)=>{
//     console.log("Deu ruim"+err)
// })
//Carregando módulos
const express = require("express");
const handlebars = require("express-handlebars")
//const bodyParser = require("body-parser")
const mongoose = require("mongoose")
var path = require('path'); 
const app = express()
var cors = require('cors');
app.use(cors());
var allowedOrigins = ['http://localhost:8081', //server
                      'http://localhost:8100'];//app
app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
    app.use((req, res,next)=>{            
    //    res.locals.success_msg = req.flash("success_msg")
      //  res.locals.error_msg = req.flash("error_msg")
        next()
    })
//Body Parser
    ////app.use(bodyParser.urlencoded({extendend: true}))
    //app.use(bodyParser.json())
//HandleBars
    app.engine('handlebars', handlebars({defaultLayout:'main'}))
    app.set('view engine', 'handlebars')
//Moongose
//    mongoose.Promise = global.Promise;
 //   mongoose.connect('mongodb://localhost/agendamentos').then(()=>{
   //     console.log("Conectado")
    //}).catch((err)=>{
      //  console.log("Deu ruim"+err) 
    //})
//Public
    app.use(express.static(path.join(__dirname,'public')))
    app.use((req,res,next) => {
        console.log("midleware")
        next()
    })
//Rotas
//API
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';


// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Drive API.
  authorize(JSON.parse(content), listFiles);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Lists the names and IDs of up to 10 files.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
images = []; 
function listFiles(auth) {
  const drive = google.drive({version: 'v3', auth});
  drive.files.list({
    pageSize: 10,
    fields: 'nextPageToken, files(id, name)',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const files = res.data.files;
    if (files.length) {
      console.log('Files:');
      files.map((file) => {
        images.push(file)
        console.log(`${file.name} (${file.id}) - ${file.url})`);
      });
    } else {
      console.log('No files found.');
    }
  });
}
app.use(function (req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers',"Origin, X-Requested-With, Content-Type, Accept");

})
    app.get("/",(req,res) => {
        console.log("here")
      res.sender("photos.html")
        //res.status(200).send({"success":true, "result":images});
    });
    //app.use('/admin', admin)




    app.listen(8081, function(){
        console.log("Servidor Rodando na url http//:localhost:8081")
    });