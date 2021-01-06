
const express = require('express');

const app = express();

app.use(express.static('./dist/Github-Angular'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/Github-Angular/' }),
);

app.listen(process.env.PORT || 8080);