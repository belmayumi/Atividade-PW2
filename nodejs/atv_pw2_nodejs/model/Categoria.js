//IMPORTAR MÓDULO DO SEQUELIZE
const sequelize = require("sequelize");

//IMPORTAR CONEXÃO COM O BANCO DE DADOS
const connection = require ("../database/database");

//CRIAR TABELA CATEGORIA
const Categoria = connection.define(
    'tbl_categoria',
    {
        codigo_categoria: {
            type: sequelize.INTEGER.UNSIGNED,
            autoincrement: true,
            primaryKey: true
        },
        nome_categoria: {
            type: sequelize.STRING(255),
            allowNull: false
        },
        observacoes_categoria: {
            type: sequelize.TEXT,
            allowNull: false
        },
    }
);

//SINCRONIZAÇÃO COM O BANCO DE DADOS - CRIA A TABELA CASO ESSA NÃO EXISTA

Categoria.sync({force: false});

module.exports = Categoria;