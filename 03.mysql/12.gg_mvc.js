const express = require('express');
const bodyParser = require('body-Parser')
const dm = require('./db/gg_db-module');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    dm.getAllLists(rows => {
        const view= require('./view/gg_list');
        let html = view.mainForm(rows);
        res.send(html);
    });
});
    
app.get('/insert', (req, res) => {
    const view= require('./view/gg_insert');
    let html = view.insertForm();
    res.send(html);
});

app.post('/insert', (req, res) => {
    let _id = req.body._id;
    let name = req.body.name;
    let debut = req.body.debut;
    let hit_song_id = req.body.hit_song_id;
    let params = [_id, name, debut, hit_song_id];
    
    dm.insertGirl_group(params, () => {
        res.redirect('/');
    });
});

app.get('/delete/:_id', (req, res) => {
    let _id = parseInt(req.params._id);
    console.log(_id);
    dm.deleteGirl_group(_id, () => {
        res.redirect('/');
    });
    
});

app.get('/update/:_id', (req, res) => {
    let _id = parseInt(req.params._id);
    dm.getSong(_id,result => {
        const view= require('./view/gg_update');
        let html = view.updateForm(result);
        res.send(html);
    });
});

app.post('/update', (req, res) => {
    let _id = parseInt(req.body._id);
    let name = req.body.name;
    let debut = req.body.debut;
    let hit_song_id = req.body.hit_song_id;
    let params = [_id, name, debut, hit_song_id];
    
    dm.updateGirl_group(params, () => {
        res.redirect('/');
    });
});

app.listen(4000, () => {
    console.log('Server Running at http://127.0.0.1:4000');
});