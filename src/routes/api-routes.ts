// routes/api-routes.ts
import  express, { Router, Request, Response, NextFunction } from 'express';
import { ApiControllers } from '../controllers/api-controllers';

const apiControllers = new ApiControllers;

export class ApiRouter {
  router: Router;
  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/file/:filename', apiControllers.getFile);
    this.router.post('/file/list', apiControllers.postFileList);
    this.router.put('/file', apiControllers.putFile);
    this.router.patch('/file/:oldFile/:newFile', apiControllers.patchFileName);
    this.router.delete('/file/:filename', apiControllers.deleteFile);
  }
}