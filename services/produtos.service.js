const pool = require("../database/connection");

const listarProdutos = async () => {
    const resultado = await pool.query("SELECT * FROM produtos");

    return resultado.rows;
};

const listarProdutoPorId = async (id) => {
    const resultado = await pool.query(
        "SELECT * FROM produtos WHERE id = $1",
        [id]
    );

    return resultado.rows[0];
};

const criarProduto = async (nome, preco, categoria) => {
    const resultado = await pool.query(
        "INSERT INTO produtos (nome, preco, categoria) VALUES ($1, $2, $3) RETURNING *;",
        [nome, preco, categoria]
    );

    return resultado.rows[0];
};

const atualizarProduto = async (id, nome, preco, categoria) => {
    const resultado = await pool.query(
        "UPDATE produtos SET nome = $1, preco = $2, categoria = $3 WHERE id = $4 RETURNING *;",
        [nome, preco, categoria, id]
    );

    return resultado.rows[0];
};

const excluirProduto = async (id) => {
    const resultado = await pool.query(
        "DELETE FROM produtos WHERE id = $1 RETURNING *;",
        [id]
    );

    return resultado.rows[0];
};

module.exports = {
    listarProdutos,
    listarProdutoPorId, 
    criarProduto, 
    atualizarProduto, 
    excluirProduto
};