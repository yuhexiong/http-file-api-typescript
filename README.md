# http file API

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
