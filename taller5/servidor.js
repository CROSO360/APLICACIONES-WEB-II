
const express = require('express')
const cors = require('cors')

const app = express();
const PUERTO = 3001;

app.use(cors()).use(express.json());
app.use('/public', express.static(__dirname + '/public'));

let tutores = [{
    "id": "1",
    "nombre": "John Cevallos Macías",
    "identificacion": "1312987654",
    "experticia": "Ingeniero en TI"
}, {
    "id": "2",
    "nombre": "Robert Moreira",
    "identificacion": "1230007898",
    "experticia": "Ingeniero en TI"
}]

module.exports = {
    app,
    PUERTO,
    tutores
}