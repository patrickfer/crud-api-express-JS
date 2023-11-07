const express = require('express');

const server = express();

server.use(express.json());

const people = ['Alan', 'Eduardo', 'Roberta'];

// Retorna uma pessoa
server.get('/people/:index', (req, res) => {
    const { index } = req.params;

    return res.json(people[index]);
});
// Retorna todas pessoas
server.get('/people', (req, res) => {
    return res.json(people);
});

// Adiciona uma nova pessoa
server.post('/people', (req, res) => {
    const { name } = req.body;
    people.push(name);

    return res.json(people);
});

// Editar a pessoa

server.put('/people/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    people[index] = name;

    return res.json(people);
});

// Deletar uma pessoa

server.delete('/people/:index', (req, res) => {
    const { index } = req.params;
    
    people.splice(index, 1);

    return res.json({ message: "A pessoa foi deletada"});
});
server.listen(3000);