// IMPORTAR O EXPRESS
const express = require('express');
const produtoModel = require('../model/Produto');
const router = express.Router();

// ROTA POST PARA CADASTRAR O PRODUTO
router.post('/produto/cadastrarProduto', (req, res) => {
res.send('Produto cadastrado com sucesso');
});

// ROTA GET PARA LISTAR O PRODUTO
router.get('/produto/listarProduto', (req, res) => {
res.send('Produto listado com sucesso');
});

// ROTA PUT PARA ALTERAR O PRODUTO
router.put('/produto/alterarProduto', (req, res) => {
res.send('Produto alterado com sucesso');
});

// ROTA DELETE PARA EXCLUIR O PRODUTO
router.delete('/produto/excluirProduto', (req, res) => {
res.send('Produto excluído com sucesso');
});

// EXPORTAR O ROUTER
module.exports = router;