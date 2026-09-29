const produtosService = require("../services/produtos.service");

const listarProdutos = async(req,res, next) =>{

    try{
    const produtos = await produtosService.listarProdutos();

    res.json(produtos);
    }
    catch(erro){
            next(erro);
        }
};

const listarProdutosPorId = async (req, res, next) =>{

    try{
    const id = req.params.id;
    
    const produto = await produtosService.listarProdutoPorId(id);

     if(!produto){
    return res.status(404).json({
        mensagem: "Produto não encontrado"
        });
        }
    
    res.json(produto);
    
}catch(erro){
 next(erro);
}
};

const criarProduto = async (req, res, next) =>{

try{
    const nome = req.body.nome;
 const preco = req.body.preco;
 const categoria = req.body.categoria;

 const produto = await produtosService.criarProduto(nome, preco, categoria);

res.json(produto);

}catch(erro){
    next(erro);
    }
};

const atualizarProduto = async (req, res, next) =>{

    try{
    const id = req.params.id;
    const nome = req.body.nome;
    const preco = req.body.preco;
    const categoria = req.body.categoria;

    const produto = await produtosService.atualizarProduto(id, nome, preco, categoria);

    if(!produto){
            return res.status(404).json({
                mensagem: "Produto não encontrado"
        });
    }

    res.json(produto);

    }catch(erro){
        next(erro);
        }
};

const excluirProduto = async (req, res, next) =>{

    try{

    const id = req.params.id;

    const produto = await produtosService.excluirProduto(id);

    if(!produto){
            return res.status(404).json({
                mensagem: "Produto não encontrado"       
    })
}

    res.json({
        mensagem: "Produto excluído com sucesso"
    })
            
}catch(erro){
            next(erro);
        }    
};

module.exports = {
    listarProdutos,
    listarProdutosPorId,
    criarProduto, 
    atualizarProduto,
    excluirProduto
}