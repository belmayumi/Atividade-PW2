CREATE DATABASE atv_pw2;
USE atv_pw2;

CREATE TABLE tbl_produto (
	cod_produto INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    cod_categoria  INT(10) UNSIGNED NOT NULL,
    nome_produto VARCHAR(255) NOT NULL,
    valor_produto DECIMAL(10,2) NOT NULL,
    imagem_produto VARCHAR(500) NOT NULL,
    descricao_produto TEXT NOT NULL
);

CREATE TABLE tbl_categoria (
    cod_categoria INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome_categoria VARCHAR(255) NOT NULL,
    observacoes_categoria TEXT NOT NULL
);

ALTER TABLE tbl_produto
ADD FOREIGN KEY (cod_categoria)
REFERENCES tbl_categoria (cod_categoria);