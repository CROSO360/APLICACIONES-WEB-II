const express =  require('express');
const cors = require('cors');

const { dbConnection } =  require('./database/config');


class Server 
{
    constructor()
    {
        this.app = express.Router();
        this.router = express.Router();

        this.port = process.env.PORT;

        this.paths = {
            tutorships: '/api/tutorships',
            tutors: '/api/tutors',
            students:'/api/students'
        }

        this.connectDB();
        this.middlewares();
        this.routes();
        this.router.use('/v1/tutorship', this.app);
        this._express = express().use(this.router);
    }
    async connectDB(){
        await dbConnection();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json())
        this.app.use(express.static('public'));
        this.app.use( '/uploads/', express.static('uploads'))

    }
    routes(){
        this.app.use(this.paths.tutorships, require('./routes/tutorships')   )
        this.app.use(this.paths.tutors, require('./routes/tutors')   )
        this.app.use(this.paths.students, require('./routes/students')   )
    }

    listen(){
        this._express.listen(this.port, ()=>{
            console.log(`Servidor ejecuntando en puerto ${this.port}`)
        })
    }


}


module.exports = Server;