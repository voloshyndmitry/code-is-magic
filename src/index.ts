
import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', function (req: Request, res: Response) {
  res.send('Code is magic');
});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`);
});

