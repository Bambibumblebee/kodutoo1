
const express = require('express'); // impordime express serveri mooduli

const path = require('path'); // Kaustade liitmiseks

const app = express(); // teeme rakenduse

const myfuncs = require('./helpers/myfuncs');

app.use(express.json()); // GET jaoks

//app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views')); // kaust views täispikk kaustatee
app.set('view engine', 'ejs'); // template https://ejs.co

const fs = require('fs'); //faili lugemiseks


let objects = fs.readFileSync('ExportJson.json');
let datas = JSON.parse(objects);
console.log(datas);


app.get('/', (req, res) => {
    res.render('index', {datas, myfuncs});
});

//app.get('*', (req, res) => {
    //res.redirect('/');
//});

app.get(':ID', (req,res) => {
    const { ID } = req.params;
    const data = datas.find(d => d.ID === ID)
    if (datas.find(d => d.ID === ID)){
        title = 'Detailne info'
        res.render('show', {title, data});
    } else {
        title = 'Error 404'
        res.render('404', {title})
    }
});



// Serveri käivitamine pordil 3001
app.listen(3001, () => { // () => asemel võib olla ka function() - see on callback function, millele nime ei anta
    console.log("Kuulan porti 3001");
})