const validarProduto = (req, res, next) =>{
    const nome = req.body.nome;
    const preco = req.body.preco;
    const categoria = req.body.categoria;

    if(typeof nome !== "string" ||typeof preco !== "number" ||typeof categoria !== "string" || nome.trim() === "" || preco <= 0 || categoria.trim() === ""){
        return res.status(400).json({
            mensagem: "Nome, preço e categoria são obrigatórios."
        });
    }
    next();
}

const validarId = (req, res, next) =>{
    const id = Number(req.params.id);

    if(Number.isInteger(id) === false || id <= 0){
        return res.status(400).json ({
            mensagem: "ID inválido"
        });
    }

    req.params.id = id;
    next();
}

module.exports={
    validarProduto,
    validarId
}