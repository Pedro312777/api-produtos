const errorMiddleware = (erro, req, res, next) =>{
    console.error("Erro no terminal", erro);

                return res.status(500).json({
                    mensagem: "Erro interno do servidor"
            });
        }

        module.exports = errorMiddleware;