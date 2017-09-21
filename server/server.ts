import * as http from "http";
import Api from "./api/api";
import { errorHandlerApi } from './api/errorHandlerApi';

const config = require('./config/env/config')();

const server = http.createServer(Api);

server.listen(config.serverPort);
server.on('listening', () => console.log(`Server is running on port: ${config.serverPort}`))
server.on('error', (error: NodeJS.ErrnoException) => console.log(`Server Error: ${error}`));