import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './app';

// Ref: https://dev.to/souzamarlon/setting-up-a-rest-api-with-node-js-and-express-js-3fl2
/**
 * @autor Alfonso Chávez
 * API: Application Programming Interface
 * REST: REpresentational State Transfer
 */
class Server{

    constructor(){
        this.app = express();
        this.server();
        this.routes();  
    }

    server(){
        this.app.set("port", 3000);
        const runPort = this.app.get("port");
        this.app.listen(runPort, () => {
          console.log(
            `Application running on port: ${runPort}.`
          );
        });
    }

    routes() {
        this.app.use(express.json());
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.get('/api', (req, res) => {
            return res.json({
                message: 'Api demo'
            });
        });
        this.app.use(router);
    }

}

export default new Server();