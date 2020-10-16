const games = require('../models/games.json')

const atualizaGamesPut = (request, response)=>{
    const gameatualizado = request.body;
    const id = parseInt(request.params.id);

    const gamesIds = games.map(game => game.id);
    const atualizaId = ( gamesIds.indexOf(id));
    const gamesAtualizadoComId = {id,...gameatualizado};

    games.splice(atualizaId, 1, gamesAtualizadoComId);

    response.status(200).send(games.find(games=> games.id == id))
}

const AtualizaGamesPatch = (response, request)=>{
    const gameAtualizada = request.body;
    const id = parseInt(request.params.id);
    const gamesParaAtualizar = games.find(games=> games.id == id);

    for (key in gameAtualizada)
    gamesParaAtualizar[key]= gameAtualizada[key]
    
    response.status(200).send(games)


}

module.exports ={
    atualizaGamesPut,
    AtualizaGamesPatch
}