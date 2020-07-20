
import express, { Request, Response } from "express";
import bodyParser from 'body-parser';
import path from "path";
import { UrlController } from './Api/UrlController'
const app = express();
const PORT = process.env.PORT || 3002;

// parse application/json
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../view/dist/view')));

new UrlController(app)

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
