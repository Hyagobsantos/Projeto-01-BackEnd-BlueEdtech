const Jogo = require("../models/index");
const mongoose = require("../database/connection");


const valid = (id,res) => {
    if(!mongoose.Types.ObjectId.isValid(id)){
      // return 'Id inválido';
      res.status(400).json({erro:"Id inválido"})
    }
}

const listarTodos = async (req,res) => {
    const jogos = await Jogo.find();
    res.json(jogos)
}

const listarPorId = async (req,res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(422).send({ error: "Id inválido" });
    return;
  }

  const find = await Jogo.findById(id);

  if(!find){
    res.status(400).json({erro:"Filme Não Encontrado"})
  }

  res.status(200).json(find);

};

const novoJogo = async (req,res) => {
  const jogo = req.body;

  if (!jogo || !jogo.nome || !jogo.img) {
    res.status(400).send({ error: "Jogo inválido!" });
    return;
  }

  const novojogo = await new Jogo(jogo).save();

  res.status(201).json(novojogo);
}

const atualizarJogo = async(req,res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(422).send({ error: "Id inválido" });
    return;
  }

  const jogo = await Jogo.findById(id);

  if (!jogo) {
    res.status(404).send({ erro: "Jogo não encontrado!" });
    return;
  }

  const novogame = req.body;
  
  if (!jogo || !jogo.nome || !jogo.img) {
    res.status(400).send({ error: "Filme inválido!" });
    return;
  }

  await Jogo.findOneAndUpdate({ _id: id }, novogame);
  const JogoAtualizado = await Jogo.findById(id);

  res.send(JogoAtualizado);
};

const excluirJogo = async (req,res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(422).send({ error: "Id inválido" });
    return;
  }

  const jogo = await Jogo.findById(id);
  if (!jogo) {
    res.status(404).send({ error: "Jogo não encontrado!" });
    return;
  }

  await Jogo.findByIdAndDelete(id);
  res.send({message: 'jogo excluído com sucesso!'})
};


module.exports = {listarTodos, novoJogo,listarPorId,atualizarJogo,excluirJogo}