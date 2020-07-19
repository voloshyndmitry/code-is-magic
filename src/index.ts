
import express, { Request, Response } from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.static(path.join(__dirname, '../view/build')));
app.get('*', (req, res) => {
    res.sendFile('www/build/index.html', { root: __dirname })
})

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`);
});
