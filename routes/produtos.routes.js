const express = require("express");

const {
    listarProdutos, 
    listarProdutosPorId, 
    criarProduto, 
    atualizarProduto, 
    excluirProduto} = require ("../controllers/produtos.controller");

const {validarProduto, validarId} = require ("../middlewares/produtos.middlewares");

const router = express.Router();

router.get("/produtos", listarProdutos);

router.get("/produtos/:id", validarId, listarProdutosPorId);

router.post("/produtos", validarProduto, criarProduto);

router.put("/produtos/:id", validarId, validarProduto, atualizarProduto);

router.delete("/produtos/:id", validarId, excluirProduto);

module.exports = router;