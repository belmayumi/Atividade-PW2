//IMPORTAR MÓDULO DO SEQUELIZE
const sequelize = require("sequelize");

//IMPORTAR CONEXÃO COM O BANCO DE DADOS
const connection = require ("../database/database");

//CRIAR TABELA PRODUTO
const Produto = connection.define(
    'tbl_produto',
    {
        codigo_produto: {
            type: sequelize.INTEGER.UNSIGNED,
            autoincrement: true,
            primaryKey: true
        },
        nome_produto: {
            type: sequelize.STRING(255),
            allowNull: false
        },
        valor_produto: {
            type: sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        imagem_produto: {
            type: sequelize.STRING(500),
            allowNull: false
        },
        descricao_produto: {
            type: sequelize.TEXT,
            allowNull: false
        },
    }
);

//SINCRONIZAÇÃO COM O BANCO DE DADOS - CRIA A TABELA CASO ESSA NÃO EXISTA

Produto.sync({force: false});

module.exports = Produto;