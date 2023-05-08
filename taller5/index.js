
const { app, PUERTO, tutores } = require('./servidor');

//mostrar  get
app.get('/mostrar-tutores', (req, res) => {
    res.status(200).json(tutores)
})

//mostrar tutor (individual) get
app.get('/mostrar-tutor/:id', (req, res) => {
    const { id } = req.params;
    const tutorSelect = tutores.filter(t => t.id === id)
    if (tutorSelect.length > 0) {
        return res.status(200).send(tutorSelect[0])
    }
    res.status(400).send({
        message: `No se encontró el tutor con id ${id}`
    })
})

//insertar tutor post
app.post('/insertar-tutor', (req, res) => {
    const { body } = req;
    tutores.push(body)
    res.status(200).send({
        message: 'Dato insertado correctamente',
        response: body
    })
})

//modificar tutor put
app.put('/modificar-tutor', (req, res) => {
    const { id, nombre, identificacion, experticia } = req.body
    const tutorSelect = tutores.filter(t => t.id === id)[0] || {}
    tutorSelect.nombre = nombre;
    tutorSelect.identificacion = identificacion;
    tutorSelect.experticia = experticia;
    res.status(200).send({
        message: `Tutor con id ${id} modificado exitosamente`,
        response: tutorSelect
    })
})

//eliminar tutor delete
app.delete('/eliminar-tutor/:id', (req, res) => {
    const { id } = req.params;
    tutores = tutores.filter(t => t.id !== id);
    res.status(200).send({
        message: `Se eliminó correctamente el tutor con id ${id}`
    })
})

//se asigna el puerto
app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en el puerto ${PUERTO}\nhttp://localhost:${PUERTO}`);
})