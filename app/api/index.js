/* Código simplório, apenas para fornecer o serviço para a aplicação */
const axios = require('axios');
var api = {}

api.dados = async function(req, res) {
    const { cep } = req.params
    const url_ = `https://viacep.com.br/ws/${cep}/json`

    const infocep = await axios({
        url: url_,
        method: 'get'
    })

    console.log(infocep.data.logradouro)

    res.json(infocep.data)


};


module.exports = api;