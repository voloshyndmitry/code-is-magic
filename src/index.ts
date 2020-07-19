
import express, { Request, Response } from "express";
import bodyParser from 'body-parser';
import path from "path";

const app = express();
const PORT = process.env.PORT || 3002;

// parse application/json
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../view/dist/view')));

app.get('/url', (req: Request, res: Response) => {
    res.json({})
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
