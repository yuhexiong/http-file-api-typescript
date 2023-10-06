# http file API

## Install modules

```bash
npm install
```

## Build

```bash
npm install -g typescript
tsc
```

## Run

```bash
npm install -g nodemon
nodemon build/server.js
```

## API

* `GET /file/:filename`
* `POST /file/list`
* `PUT /file`
* `PATCH /file/:oldFile/:newFile`
* `DELETE /file/:filename`