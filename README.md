# http file API
A server provide upload and download file.  

## Overview

- Language: TypeScript
- Web FrameWork: Express

## Install modules

```bash
npm install
```

## Build

```bash
tsc
```

## Run

```bash
nodemon build/server.js
```

## API

* `GET /file/:filename`
* `POST /file/list`
* `PUT /file`
* `PATCH /file/:oldFile/:newFile`
* `DELETE /file/:filename`
