const { tutoria, tutorado } = require('./datos');

function PromesaTutoriaPorId(id) {
    return new Promise((resolve, reject) => {
        const tutoriaux = tutoria.find(t => t.id === id);
        var resultado = []
        if (tutoriaux) {
            const tutoradoaux = tutorado.find(t => t.id === tutoriaux.id_tutorado)
            if (!tutoradoaux) {
                resolve(resultado = [tutoriaux])
            }
            resolve(resultado = [tutoriaux, tutoradoaux])
        }
        else {
            const error = new Error();
            error.message = `No se encontró la tutoría con id ${id}`;
            reject(error)
        }
    })
}

async function AsyncTutoriaPorId(id) {
    const tutoriaux = tutoria.find(t => t.id === id);
    var resultado = []
    if (tutoriaux) {
        const tutoradoaux = tutorado.find(t => t.id === tutoriaux.id_tutorado)
        if (!tutoradoaux) {
            return resultado = [tutoriaux]
        }
        return resultado = [tutoriaux, tutoradoaux]
    }else{
        const error = new Error();
        error.message = `No se encontró la tutoría con id ${id}`;
        throw error;
    }
}

module.exports = {
    PromesaTutoriaPorId,
    AsyncTutoriaPorId
}