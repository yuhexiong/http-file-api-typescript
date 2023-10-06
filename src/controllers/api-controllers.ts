// controllers/api-controllers.ts
import { Request, Response, NextFunction } from 'express';
const fs = require('fs');
const os = require('os');
const path = require('path');
const busboy = require('busboy');
const mime = require('mime-types')

export class ApiControllers {
  getFile(request: Request, response: Response, next: NextFunction) {
    const downloadFrom: string  =  path.join(os.tmpdir(), `file_server-${request.params.filename}`);
    if (fs.existsSync(downloadFrom)) {
      response.download(downloadFrom);
    } else {
      response.send('Invalid Input');
    }
    
  }

  postFileList(request: Request, response: Response, next: NextFunction) {

    let files = fs.readdirSync(os.tmpdir()).filter((fn: any) => fn.startsWith('file_server-'));
    if (files.length === 0) {
      response.send(`empty folder`);
    } else {
      response.send(files);
    }
  }

  putFile(request: Request, response: Response, next: NextFunction) {

    const bb = busboy({ headers: request.headers });
    let saveTo: string;

    bb.on('file', (filename: string, file: any, info: any) => {
      saveTo = path.join(os.tmpdir(), `file_server-${filename}.${mime.extension(info.mimeType)}`);
      file.pipe(fs.createWriteStream(saveTo));
    });
    bb.on('close', () => {
      response.writeHead(200, { 'Connection': 'close' });
      response.end(`save as ${saveTo}`);
    });
    
    request.pipe(bb);
    return;

  }


  patchFileName(request: Request, response: Response, next: NextFunction) {
    const oldPath = path.join(os.tmpdir(), `file_server-${request.params.oldFile}`);
    const newPath = path.join(os.tmpdir(), `file_server-${request.params.newFile}`);

    if (fs.existsSync(oldPath)) {
      fs.renameSync(oldPath, newPath);
      response.end(`rename ${request.params.oldFile} as ${request.params.newFile}`);
    } else {
      response.send('Invalid Input');
    }
  }

  deleteFile(request: Request, response: Response, next: NextFunction) {
    
    const deleteFile = path.join(os.tmpdir(), `file_server-${request.params.filename}`);

    if (fs.existsSync(deleteFile)) {
      fs.unlinkSync(deleteFile);
      response.end(`delete ${deleteFile}`);
    } else {
      response.send('Invalid Input');
    }
    
  }
}