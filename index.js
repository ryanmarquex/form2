import express from "express";
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rota para processar o formulário
app.post('/cadastrar', (req, res) => {
    const { nome, email } = req.body;
    res.send(`Usuário cadastrado com sucesso! Nome: ${nome}, Email: ${email}`);
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
