const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  mongoose.connect('mongodb+srv://RVANG:321654987@cluster0.iiubf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    console.log('requete recue')
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next()
});

app.use((req, res, next) => {
    res.json({message: 'votre requete a bien ete recue'});
    next();
});

app.use((req, res, next) => {
    console.log('reponse envoyé avec succes')
    next();
});

module.exports = app;