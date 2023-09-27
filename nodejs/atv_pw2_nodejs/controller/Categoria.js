// IMPORTAR O EXPRESS
const express = require('express');
const categoriaModel = require('../model/Categoria');
const router = express.Router();

// ROTA POST PARA CADASTRAR A CATEGORIA
router.post('/categoria/cadastrarCategoria', (req, res) => {
res.send('Categoria cadastrada com sucesso');
});

// ROTA GET PARA LISTAR A CATEGORIA
router.get('/categoria/listarCategoria', (req, res) => {
res.send('Categoria listada com sucesso');
});

// ROTA PUT PARA ALTERAR A CATEGORIA
router.put('/categoria/alterarCategoria', (req, res) => {
res.send('Categoria alterada com sucesso');
});

// ROTA DELETE PARA EXCLUIR A CATEGORIA
router.delete('/categoria/excluirCategoria', (req, res) => {
res.send('Categoria excluída com sucesso');
});

// EXPORTAR O ROUTER
module.exports = router;