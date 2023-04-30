//importar mongoose
const { default: mongoose, mongo } = require('mongoose');

//definir las entidades
const Tutor = mongoose.model("Tutor", { nombre: String });

const Estudiante = mongoose.model("Estudiante", { nombre: String });

const Tutoria = mongoose.model("Tutoria", {
    nombre: String,
    tutor: { type: mongoose.Types.ObjectId, ref: "Tutor" },
    estudiantes:
        [{
            estudiante: { type: mongoose.Types.ObjectId, ref: "Estudiante" },
        }],
});

// Enumeración para los modelos permitidos
const EntidadesPermitidas = Object.freeze({
    TUTOR: 'Tutor',
    ESTUDIANTE: 'Estudiante',
    TUTORIA: 'Tutoria'
});



//funciones paras las entidades maestras
async function CrearTutor(nombre) {
    try {
        const tutor = new Tutor({ nombre: nombre });
        await tutor.save();
        return tutor;
    } catch (error) {
        return error;
    }
}

async function CrearEstudiante(nombre) {
    try {
        const estudiante = new Estudiante({ nombre: nombre });
        await estudiante.save();
        return estudiante;
    } catch (error) {
        return error;
    }
}

async function ModificarEntidadMaestra(id, nuevoNombre, modelo) {
    try {
        if (modelo === EntidadesPermitidas.TUTOR) {
            const tutorActualizado = await Tutor.findByIdAndUpdate(
                id,
                { nombre: nuevoNombre },
                { new: true }
            );
            return tutorActualizado;
        } else if (modelo === EntidadesPermitidas.ESTUDIANTE) {
            const estudianteActualizado = await Estudiante.findByIdAndUpdate(
                id,
                { nombre: nuevoNombre },
                { new: true }
            );
            return estudianteActualizado;
        } else {
            throw new Error('Modelo no válido. Ingrese Tutor o Estudiante');
        }
    } catch (error) {
        return error;
    }
}



//funciones para la entidad transaccional
async function CrearTutoria(nombreTutoria, tutorObjeto, estudiantesArreglo) {
    try {
        const estudiantesMap = estudiantesArreglo.map(estudiante => ({ estudiante: estudiante._id }));
        const tutoria = new Tutoria({
            nombre: nombreTutoria,
            tutor: tutorObjeto._id,
            estudiantes: estudiantesMap
        });
        await tutoria.save();
        return tutoria;
    } catch (error) {
        return error;
    }
}

async function ModificarTutoria(idTutoria, nombreTutoria = null, tutorObjeto = null, estudiantesArreglo = null) {
    try {
        const tutoria = await Tutoria.findById(idTutoria);
        if (!tutoria) {
            throw new Error("Tutoría no encontrada");
        }
        if (nombreTutoria !== null) {
            tutoria.nombre = nombreTutoria;
        }
        if (tutorObjeto !== null) {
            tutoria.tutor = tutorObjeto._id;
        }
        if (estudiantesArreglo !== null) {
            const estudiantesMap = estudiantesArreglo.map(estudiante => ({ estudiante: estudiante._id }));
            tutoria.estudiantes = estudiantesMap;
        }
        await tutoria.save();
        return tutoria;
    } catch (error) {
        return error;
    }
}



//funciones en comun
async function MostrarEntidadPorId(id, modelo) {
    // Verificar que el modelo sea una entidad permitida
    if (!Object.values(EntidadesPermitidas).includes(modelo)) {
        throw new Error(`Modelo no válido. Debe ser uno de: ${Object.values(EntidadesPermitidas).join(', ')}`);
    }

    let tipoEntidad;
    if (modelo === EntidadesPermitidas.TUTOR) {
        modelo = Tutor;
        tipoEntidad = EntidadesPermitidas.TUTOR;
    } else if (modelo === EntidadesPermitidas.ESTUDIANTE) {
        modelo = Estudiante;
        tipoEntidad = EntidadesPermitidas.ESTUDIANTE;
    } else if (modelo === EntidadesPermitidas.TUTORIA) {
        modelo = Tutoria;
        tipoEntidad = EntidadesPermitidas.TUTORIA;
    }

    try {
        const entidad = await modelo.findById(id);
        if (!entidad) {
            console.log(`No se encontró una entidad de tipo ${tipoEntidad} con el id: ${id}`);
        } else {
            console.log(entidad);
        }
    } catch (error) {
        return error;
    }
}

async function MostrarEntidades(modelo) {
    if (!Object.values(EntidadesPermitidas).includes(modelo)) {
        throw new Error(`Modelo no válido. Debe ser uno de: ${Object.values(EntidadesPermitidas).join(', ')}`);
    }

    try {
        if (modelo === EntidadesPermitidas.TUTOR) {
            const entidades = await Tutor.find({});
            entidades.forEach(e => {
                console.log(e);
            });
        } else if (modelo === EntidadesPermitidas.ESTUDIANTE) {
            const entidades = await Estudiante.find();
            for (const i in entidades) {
                console.log(entidades[i])
            }
        } else {
            const entidades = await Tutoria.find().populate("tutor").populate("estudiantes.estudiante.nombre");
            for (let i = 0; i < entidades.length; i++) {
                console.log(entidades[i])
            }
        }

    } catch (error) {
        console.log(error);
    }
}

async function EliminarEntidadPorId(id, modelo) {
    // Verificar que el modelo sea una entidad permitida
    if (!Object.values(EntidadesPermitidas).includes(modelo)) {
        throw new Error(`Modelo no válido. Debe ser uno de: ${Object.values(EntidadesPermitidas).join(', ')}`);
    }

    let tipoEntidad;
    if (modelo === EntidadesPermitidas.TUTOR) {
        modelo = Tutor;
        tipoEntidad = EntidadesPermitidas.TUTOR;
    } else if (modelo === EntidadesPermitidas.ESTUDIANTE) {
        modelo = Estudiante;
        tipoEntidad = EntidadesPermitidas.ESTUDIANTE;
    } else if (modelo === EntidadesPermitidas.TUTORIA) {
        modelo = Tutoria;
        tipoEntidad = EntidadesPermitidas.TUTORIA;
    }

    try {
        const entidadEliminada = await modelo.findByIdAndDelete(id);
        if (!entidadEliminada) {
            console.log(`No se encontró una entidad de tipo ${tipoEntidad} con el id: ${id}`);
        } else {
            console.log(`Se eliminó la entidad de tipo ${tipoEntidad} con el id: ${id}`);
        }
    } catch (error) {
        console.log(error);
    }
}

//exportar entidades y funciones
module.exports = {
    Tutor,
    Estudiante,
    Tutoria,
    CrearTutor,
    CrearEstudiante,
    ModificarEntidadMaestra,
    MostrarEntidadPorId,
    MostrarEntidades,
    CrearTutoria,
    ModificarTutoria,
    EliminarEntidadPorId
}