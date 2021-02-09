const { text } = require("express");
const express = require("express");
const app = express();
const port = 8000;

const quotes =[{
       author : "Platón",
       text : "Donde reina el amor sobran las leyes"
},
{
        author : "Jacinto Benavente",
       text : "Lo peor que hacen los malos es obligarnos a dudar de los buenos "
 }
];

app.use(express.static(__dirname + "/static"));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(session({ secret: 'secret'}));

app.set('views', __dirname + '/views');
app.set('view engine','ejs');

app.use('/static', express.static("static"));

app.set(require('./routes'));



app.listen( port, () => console.log(`Listening on port: ${port}`) );

