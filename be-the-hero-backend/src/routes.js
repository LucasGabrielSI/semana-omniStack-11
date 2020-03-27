const { Router } = require('express');

const routes = Router();

routes.post('/users', (req, res) => {
    const body = req.body;

    console.log(body);

    return res.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Lucas Gabriel de Oliveira Bento'
    });
});

module.exports = routes;