const express = require("express");

const {Pool} = require("pg");

require("dotenv").config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

pool.query("SELECT NOW()", (erro,resultado) => {
    if(erro){
        console.error("Erro ao conectar com o banco:", erro);
        return;
    }

    console.log("Banco conectado com sucesso");
    console.log(resultado.rows);
});

const app = express();

app.use(express.json());

app.use((req,res, next)=>{
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    next();
});

app.get("/produtos", (req,res) => {
    pool.query("SELECT * FROM produtos", (erro, resultado) =>{
        if(erro){
            console.error("Erro ao conectar com o banco:", erro);
            return;
        }
        res.json(resultado.rows);
    })
});

app.get("/produtos/:id", (req, res) =>{
    const id = Number(req.params.id);
    pool.query("SELECT * FROM produtos WHERE id = $1", [id], (erro, resultado) => {
        if(erro){
            console.log("Erro ao consultar o banco:", erro);
            return res.status(500).json({
            mensagem: "Erro interno do servidor"
        });
        }
        if(resultado.rows.length === 0){
            return res.status(404).json({
        mensagem: "Produto não encontrado"
        });
        }
        res.json(resultado.rows[0]);
    })
});

const produtos = [
    {
        id: 1,
        nome: "Maçã",
        preco: 5,
        categoria: "Fruta"
    },
    {
        id: 2,
        nome: "Banana",
        preco: 3,
        categoria: "Fruta"
    },
    {
        id: 3,
        nome: "Arroz",
        preco: 25,
        categoria: "Alimento"
    }
];

app.get("/", (req, res) => {
    res.json({
        mensagem: "Minha API está funcionando!"
    });
});

app.get("/produtos", (req, res) => {
    res.json(produtos);
});

app.get("/produtos/:id", (req, res) => {

    const id = Number(req.params.id);

    const produto = produtos.find(produto => produto.id === id);

    if(!produto){
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    res.json(produto);

});

app.post("/produtos", (req, res) => {
 const nome = req.body.nome;
 const preco = req.body.preco;
 const categoria = req.body.categoria;

if(typeof nome != "string" ||typeof preco != "number" ||typeof categoria != "string" || nome.trim() === "" || preco <= 0 || categoria.trim() === ""){
    return res.status(400).json({
    mensagem: "Nome, preço e categoria são obrigatórios."
});
 }

 pool.query("INSERT INTO produtos (nome, preco, categoria) VALUES ($1, $2, $3) RETURNING *;", [nome, preco, categoria],(erro, resultado) =>{
    if(erro){
        console.log("Erro ao postar o novo produto", erro);
        return res.status(500).json({
                    mensagem: "Erro ao criar produto"
        });
    }
    res.json(resultado.rows[0]);
 });

});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

app.put("/produtos/:id", (req,res) =>{
    const id = Number(req.params.id);
    const nome = req.body.nome;
    const preco = req.body.preco;
    const categoria = req.body.categoria;

    if(typeof nome != "string" ||typeof preco != "number" ||typeof categoria != "string" || nome.trim() === "" || preco <= 0 || categoria.trim() === ""){
        return res.status(400).json({
            mensagem: "Nome, preço e categoria são obrigatórios."
        });
    }

    pool.query("UPDATE produtos SET nome = $1, preco = $2, categoria = $3 WHERE id = $4 RETURNING *;", [nome, preco, categoria, id], (erro, resultado)=>{
        if(erro){
        console.log("Erro ao atualizar o novo produto", erro);
        return res.status(500).json({
                    mensagem: "Erro ao atualizar o produto"
        });
        }
        if(resultado.rows.length === 0){
            return res.status(404).json({
                mensagem: "Produto não encontrado"
        });
        }
        res.json(resultado.rows[0]);
    })
});

app.delete("/produtos/:id", (req,res) => {
    const id = Number(req.params.id);

    pool.query("DELETE FROM produtos WHERE id = $1 RETURNING*;", [id], (erro, resultado) =>{
        if(erro){
            console.log("Erro ao excluir o produto", erro);
                return res.status(500).json({
                    mensagem: "Erro ao excluir o produto"
            });
        }
        if(resultado.rows.length === 0){
            return res.status(404).json({
                mensagem: "Produto não encontrado"       
    })
}
    res.json({
        mensagem: "Produto excluído com sucesso"
    })
    })
});