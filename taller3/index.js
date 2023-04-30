//importar mongoose
const { default: mongoose, mongo } = require('mongoose');
//importar las entidades y las funciones
const { Tutor, Estudiante, Tutoria, CrearTutor, CrearEstudiante, ModificarEntidadMaestra, MostrarEntidadPorId, MostrarEntidades, CrearTutoria, ModificarTutoria, EliminarEntidadPorId } = require('./entidades');

//guardar en una variable la cadena de coneccion proporcionada en el proyecto de Atlas
const cadenaConexion = "mongodb+srv://croso:croso12@cluster0.n6maocl.mongodb.net/test";// se cambia la contraseña y el nombre de la bdd (opcional)

//funcion async para realizar el proceso
(async () => {
    try {

        //se realiza la conexion a la base de datos
        const conexion = await mongoose.connect(cadenaConexion);

        //1 tutor puede asistir a varias (1 o mas) tutorias
        //1 tutorado (estudiantes) puede asistir a varias (1 o mas) tutorias 
        //1 tutoria tiene 1 tutor y 1 tutorado (grupo de estudiantes) T


        //Se crean los tutores
        const tutor1 = await CrearTutor("John Cevallos");
        const tutor2 = await CrearTutor("Robert Moreira");

        //se crean los estudiantes
        const estudiante1 = await CrearEstudiante("Cristian Bonilla");
        const estudiante2 = await CrearEstudiante("Miryan Franco ♥");
        const estudiante3 = await CrearEstudiante("Carlos Chavez");
        const estudiante4 = await CrearEstudiante("Juan Ferrin");
        const estudiante5 = await CrearEstudiante("Michael Vinces");

        //se guardan los estudiantes en arreglos
        const arregloEstudiantes1 = [
            estudiante1, estudiante2, estudiante3
        ]
        const arregloEstudiantes2 = [
            estudiante3, estudiante4, estudiante5
        ]

        //se crean las tutorias
        const tutoria1 = await CrearTutoria("Aplicaciones Web 2", tutor1, arregloEstudiantes1);
        const tutoria2 = await CrearTutoria("Gestion de Base de Datos", tutor2, arregloEstudiantes2);


        //mostrar tutores
        await MostrarEntidades("Tutor");

        //mostrar estudiantes
        await MostrarEntidades("Estudiante");

        //mostrar tutorias
        await MostrarEntidades("Tutoria");

        //modificar una entidad maestra
        //mostrar entidad especifica recien modificada
        await ModificarEntidadMaestra(estudiante5._id, "Leonardo Andrade", "Estudiante");
        await MostrarEntidadPorId(estudiante5._id, "Estudiante");

        //modificar entidad transaccional
        //se crea un nuevo tutor y se lo reemplaza en la tutoria 1 al igual que se cambia el nombre de la tutoria
        //se muestra la tutoria modificada
        const tutor3 = await CrearTutor("The Weeknd");
        await ModificarTutoria(tutoria1._id,"Dawn FM",tutor3,null);
        await MostrarEntidadPorId(tutoria1._id,"Tutoria");

        //eliminar una entidad especifica
        //mostrar el conjunto de entidades actualizado
        await EliminarEntidadPorId(estudiante4._id,"Estudiante");
        await MostrarEntidades("Estudiante");

    } catch (error) {
        console.log(error)
    }
})();