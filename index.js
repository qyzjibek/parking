import express, { request } from "express";
import bodyParser from "body-parser";

const app = express();

const port = 8080;

// app.use(bodyParser, urlencoded({ extended: false }));
app.use(bodyParser.json());

let slots = [
    { number: 1, 
      occupied: false,
      arrival_time: 0,
      quit_time: 0 
    }
];

app.get('/slots', (req, res) => {
    res.status(200).json(slots);
});

app.post('/slot', (req, res) => {
    const newProduct = req.body;
    slots.push(newProduct);

    res.status(200).send();
});

app.delete('./product/{id}', (req, res) => {
    
})

// Зарезирвируй порт и слушай его, потом выполняй команды
app.listen(port, () => {
    console.log('Server started');
})