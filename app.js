//Déclaration des différents modules nécéssaires (ici express et fs)
const { response } = require('express');
const express = require('express');
const fs = require('fs');
const app = express();

//Appel du express mis plus haut sur la constante "app"
app.get('/data', (request, response) => {
    //Appel du FS afin de lire les données transcrites dans notre JSON
    fs.readFile('data.json',(err, data) => {
        //En cas d'erreur
        if(err){
            response.status(500).json({
                message: "Une erreur de la lecture des données",
            })
        //Si aucune erreur dans les données
        } else {
            response.status(200).json(JSON.parse(data));
        }
    })
})
//Lecture du tout dans le localhost:2000
app.listen(2000, () => {

})