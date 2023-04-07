//Declaración de las 3 entidades mediante arreglos con sus respectivos atributos
const tutor = [
    { id: "1", nombre: 'Maicol', identificacion: "1234567898", experticia: "wasi" },
    { id: "2", nombre: 'Rober', identificacion: "1234568521", experticia: "wachi" },
    { id: "3", nombre: 'Cristofer', identificacion: "1234545212", experticia: "basi" },
    { id: "4", nombre: 'Calle', identificacion: "7845124578", experticia: "sape" },
    { id: "5", nombre: 'Diego', identificacion: "7844771122", experticia: "bambasten" },
];

const tutorado = [
    { id: "1", nombre: 'Daniela', identificacion: "7845632314" },
    { id: "2", nombre: 'Carlos', identificacion: "7874563215" },
    { id: "3", nombre: 'Juan', identificacion: "7876563254" },
    { id: "4", nombre: 'Fredo', identificacion: "9656321454" },
    { id: "5", nombre: 'Cristian', identificacion: "4862156489" },
];

const tutoria = [
    { id: "1", id_tutor: "5", id_tutorado: "5", asignatura: "POO", numero_horas: "3", fecha: "30/03/2023", hora: "21:00" },
    { id: "2", id_tutor: "4", id_tutorado: "4", asignatura: "Aplicaciones web 1", numero_horas: "2", fecha: "30/03/2023", hora: "21:00" },
    { id: "3", id_tutor: "3", id_tutorado: "3", asignatura: "Aplicaiones web 2", numero_horas: "8", fecha: "30/03/2023", hora: "21:00" },
    { id: "4", id_tutor: "2", id_tutorado: "2", asignatura: "Gobierno de TI", numero_horas: "2", fecha: "30/03/2023", hora: "21:00" },
    { id: "5", id_tutor: "1", id_tutorado: "1", asignatura: "Base de datos", numero_horas: "10", fecha: "30/03/2023", hora: "21:00" },
];


//Función que muestra en pantalla la información de las 3 entidades enlazadas entre sí
function MostrarInfo(tutor, tutorado, tutoria) {

    //tutoria
    //Cliclo for recorre tutoría la cual es la entidad central en la relación con las otras entidades
    for (const i of tutoria) {
        //se muestra los  atributos de la tutoría
        console.log(`Tutoria ${i.id}`)
        console.log(`id: ${i.id} | asignatura: ${i.asignatura} | numero de horas: ${i.numero_horas} | fecha: ${i.fecha} | hora: ${i.hora} | id_tutor: ${i.id_tutor} | id_tutorado: ${i.id_tutorado} `)
        
        //tutores
        console.log(`Tutores asignados:`)
        let z = 0;
        //mediante un while recorre tutor
        while (z < tutor.length) {
            //valida si el id tutor de TUTORIA es igual al id tutor de TUTOR
            if (i.id_tutor == tutor[z].id) {
                //si coincide imprimira en pantalla los atributos de tutor
                console.log(`id: ${tutor[z].id}| nombre: ${tutor[z].nombre} | cedula: ${tutor[z].identificacion} | experticia: ${tutor[z].experticia}`)
            }
            z++;
        }

        //estudiantes
        console.log(`Estudiantes:`)
        //mediante un foreach recorre tutorado
        tutorado.forEach(a => {
            //valida si el id estudiante de TUTORIA es igual al id estudiante de TUTORADO
            if (i.id_tutorado == a.id) {
                //de cumplirse la condicion imprime en pantalla los atributos del estudiante
                console.log(`id: ${a.id}| nombre: ${a.nombre} | cedula: ${a.identificacion}`)
            }
        });
        console.log("--------------------------------------------------------------------------")
    }
}

//Se exportan las entidades y la funcion
module.exports = {
    MostrarInfo,
    tutor,
    tutoria,
    tutorado,
};



