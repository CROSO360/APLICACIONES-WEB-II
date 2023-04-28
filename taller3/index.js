const { default: mongoose, mongo } = require('mongoose');
//importa mongoose
require('mongoose');

//guardar en una variable la cadena de coneccion proporcionada en el proyecto de Atlas
const cadenaConexion = "mongodb+srv://croso:croso12@cluster0.n6maocl.mongodb.net/bddt3";// se cambia la contraseña y el nombre de la bdd (opcional)

//funcion async para realizar el proceso
(async () => {
    try {
        //se realiza la conexion a la base de datos
        const conexion = await mongoose.connect(cadenaConexion);

        //1 tutor puede asistir a varias (1 o mas) tutorias
        //1 tutorado (estudiantes) puede asistir a varias (1 o mas) tutorias 
        //1 tutoria tiene 1 tutor y 1 tutorado (grupo de estudiantes) T

        //se definen las entidades Tutor, Estudiante y Tutoria
        const Tutor = mongoose.model("Tutor", { nombre: String });

        const Estudiante = mongoose.model("Estudiante", { nombre: String });

        const Tutoria = mongoose.model("Tutoria", {
            nombre: String,
            idtutor: { type: mongoose.Types.ObjectId, ref: "Tutor" },
            estudiantes:
                [{
                    estudiante: { type: mongoose.Types.ObjectId, ref: "Estudiante" },
                }],
        });

        //Se crean los tutores
        const tutor1 = new Tutor({ nombre: "John Cevallos" });
        const tutor2 = new Tutor({ nombre: "Robert Moreira" });
        //se guaradan los registros de los tutores
        const tutor1Save = await tutor1.save();
        const tutor2Save = await tutor2.save();

        //se crean los estudiantes
        const estudiante1 = new Estudiante({ nombre: "Cristian Bonilla" });
        const estudiante2 = new Estudiante({ nombre: "Miryan Franco ♥" });
        const estudiante3 = new Estudiante({ nombre: "Carlos Chavez" });
        const estudiante4 = new Estudiante({ nombre: "Juan Ferrin" });
        const estudiante5 = new Estudiante({ nombre: "Michael Vinces" });
        //se guardan los registros de los estudiantes
        const estudiante1Save = await estudiante1.save();
        const estudiante2Save = await estudiante2.save();
        const estudiante3Save = await estudiante3.save();
        const estudiante4Save = await estudiante4.save();
        const estudiante5Save = await estudiante5.save();

        //se crean las tutorias
        const tutoria1 = new Tutoria({
            nombre: "Aplicaciones Web 2",
            idtutor: tutor1._id,
            estudiantes: [
                { estudiante: estudiante1._id },
                { estudiante: estudiante2._id },
                { estudiante: estudiante3._id },
            ]
        });
        const tutoria2 = new Tutoria({
            nombre: "Gestion de Base de Datos",
            idtutor: tutor2._id,
            estudiantes: [
                { estudiante: estudiante3._id },
                { estudiante: estudiante4._id },
                { estudiante: estudiante5._id },
            ]
        });
        //se guardan los registros de las tutorias
        const tutoria1Save = await tutoria1.save();
        const tutoria2Save = await tutoria2.save();


        //se hace la consulta de tutores mediante find()
        const resultadoTutor = await Tutor.find();
        console.log("TUTORES---------------------------------------");
        //se recorre el arreglo mediante foreach
        resultadoTutor.forEach(e => {
            console.log(e);
        });
        console.log("-----------------------------------------------")

        //se hace la consulta de estudiantes mediante find()
        const resultadoEstudiante = await Estudiante.find();
        console.log("ESTUDIANTES------------------------------------");
        //se corre el arreglo mediante for in
        for (const i in resultadoEstudiante) {
            console.log(resultadoEstudiante[i])
        }
        console.log("-----------------------------------------------")

        //se hace la consulta de las tutorias mediante find() y se acceden al resto de entidades relacionadas mediante populate()
        const resultadoTutoria = await Tutoria.find().populate("idtutor").populate("estudiantes.estudiante.nombre");
        console.log("TUTORIAS---------------------------------------");
        //se recorre el arreglo mediante for
        for (let i = 0; i < resultadoTutoria.length; i++) {
            console.log(resultadoTutoria[i])
        }
        console.log("-----------------------------------------------")
       

    } catch (error) {
        console.log(error)
    }
})();