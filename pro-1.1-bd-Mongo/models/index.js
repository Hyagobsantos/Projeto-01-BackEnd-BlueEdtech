const mongoose = require("../database/connection");

const JogoSchema = new mongoose.Schema({
    nome:{
        type:String,
        require:true
    },

    img:{
        type:String,
        require:true
    }
});

const Jogo = mongoose.model("jogos", JogoSchema);

module.exports = Jogo;