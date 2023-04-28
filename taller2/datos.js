/*const tutor = [
    { id: "1", nombre: 'Maicol', identificacion: "1234567898", experticia: "wasi" },
    { id: "2", nombre: 'Rober', identificacion: "1234568521", experticia: "wachi" },
    { id: "3", nombre: 'Cristofer', identificacion: "1234545212", experticia: "basi" },
    { id: "4", nombre: 'Calle', identificacion: "7845124578", experticia: "sape" },
    { id: "5", nombre: 'Diego', identificacion: "7844771122", experticia: "bambasten" },
];*/

const tutorado = [
    { id: "1", nombre: 'Daniela', identificacion: "7845632314" },
    { id: "2", nombre: 'Carlos', identificacion: "7874563215" },
    { id: "3", nombre: 'Juan', identificacion: "7876563254" },
    { id: "4", nombre: 'Fredo', identificacion: "9656321454" },
    { id: "5", nombre: 'Cristian', identificacion: "4862156489" },
];

const tutoria = [
    { id: "1", /*id_tutor: "5",*/ id_tutorado: "5", asignatura: "POO", numero_horas: "3", fecha: "30/03/2023", hora: "21:00" },
    { id: "2", /*id_tutor: "4",*/ id_tutorado: "0", asignatura: "Aplicaciones web 1", numero_horas: "2", fecha: "30/03/2023", hora: "21:00" },
    { id: "3", /*id_tutor: "3",*/ id_tutorado: "3", asignatura: "Aplicaiones web 2", numero_horas: "8", fecha: "30/03/2023", hora: "21:00" },
    { id: "4", /*id_tutor: "2",*/ id_tutorado: "2", asignatura: "Gobierno de TI", numero_horas: "2", fecha: "30/03/2023", hora: "21:00" },
    { id: "5", /*id_tutor: "1",*/ id_tutorado: "1", asignatura: "Base de datos", numero_horas: "10", fecha: "30/03/2023", hora: "21:00" },
];

module.exports = {
    //tutor,
    tutorado,
    tutoria
}
