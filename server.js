const express = require("express");

const produtosRoutes = require("./routes/produtos.routes");

const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());

app.use((req,res, next)=>{
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    next();
});

app.use(produtosRoutes);

app.get("/", (req, res) => {
    res.json({
        mensagem: "Minha API está funcionando!"
    });
});

app.use(errorMiddleware);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

