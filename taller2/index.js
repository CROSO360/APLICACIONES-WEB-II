const { AsyncTutoriaPorId, PromesaTutoriaPorId } = require('./funciones');

(async () => {
    try {
        const resultado = await AsyncTutoriaPorId("2");
        if (resultado.length > 1) {
            console.log("-----------------------------------------\nFUNCIÓN ASYNC\n")
            console.log(`tutoria: ${resultado[0].asignatura}\nestudiante: ${resultado[1].nombre}`);
            console.log("-----------------------------------------")
        } else {
            console.log("-----------------------------------------\nFUNCIÓN ASYNC\n")
            console.log(`tutoria: ${resultado[0].asignatura}\nestudiante: no hay un estudiante asignado`);
            console.log("-----------------------------------------")
        }
    } catch (error) {
        console.log("-----------------------------------------\nFUNCIÓN ASYNC\n")
        console.log(error.message);
        console.log("-----------------------------------------")
    }
})();

PromesaTutoriaPorId("1")
    .then((resultado) => {

        if (resultado.length > 1) {
            console.log("-----------------------------------------\nFUNCIÓN PROMESA\n")
            console.log(`tutoria: ${resultado[0].asignatura}\nestudiante: ${resultado[1].nombre}`);
            console.log("-----------------------------------------")
        } else {
            console.log("-----------------------------------------\nFUNCIÓN PROMESA\n")
            console.log(`tutoria: ${resultado[0].asignatura}\nestudiante: no hay un estudiante asignado`);
            console.log("-----------------------------------------")
        }
    })
    .catch((error) => {
        console.log("-----------------------------------------\nFUNCIÓN PROMESA\n")
        console.log(error.message);
        console.log("-----------------------------------------")
    })

