const express = require("express");
const { send } = require("process");

const app = express();
app.use(express.json());

const jogos = [

    {
        id:1,
        nome:"Mario Kart",
        img: "https://play-lh.googleusercontent.com/BTu7ltWrQqvt3l3D8devAUcFzh6gJp1hIeW28s3S8RPEx2FcZjku2b9R1EOr-di5L3Y"
    },
    {
        id:2,
        nome:"Demon Slayer - The Hinokami Chronicles",
        img: "https://www.gematsu.com/wp-content/uploads/2021/06/Demon-Slayer-Kimetsu-no-Yaiba-The-Hinokami-Chronicles_2021_06-20-21_002.jpg"
    },
    {
        id:3,
        nome:"Resident Evil Village",
        img:"https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png"
    },

]

app.get("/jogos", (req,res) => {
    res.json(jogos)
});

app.get("/jogos/:id", (req,res) => {
    
    if(!buscarGame){
        res.status(404).json({erro:"Recurso não Encontrado"})
    }

    res.json(buscarGame);
    
});

const validarEntradas = (jogo) => {

    if(jogo.nome)

    if(typeof jogo.nome !== "string"){
        return "o Campo nome precisa ser uma String"
    }
}

let auxiliar = 3;
app.post("/jogos", (req,res) => {
    const buscarGame = jogos.find(x => x.id === +req.params.id);

    if(buscarGame){
       res.status(400).json("Jogo Já Existe") 
    }

    novoJogo = {
        nome: req.body.nome,
        img: req.body.img
    }

    jogos.push(novoJogo);
    res.status(201).json(novoJogo);

});

// app.put("/jogos/:id", (req,res) => {
//     const buscarGame = jogos.find(x => x.id === +req.params.id);

//     if(buscarGame){
//         //existe substitui
//         if(req.body.nome != undefined)  buscarGame.nome = req.body.nome;
//         if(req.body.img != undefined)  buscarGame.img = req.body.img 
        
//     }else{
//         //cria
//         if(req.body.id === req.params.id){
//             const novoJogador = {
//                 id: req.body.id,
//                 nome: req.body.nome,
//                 img: req.body.img,
//             }
//         }else{
//             req.status(400).json({erro: "Favor Informar o mesmo id que no paramentro e no corpo"})
//         }
//     }
// });


app.put("/jogos/:id", (req,res) => {
    const buscarGame = jogos.find(x => x.id === +req.params.id);

    if(buscarGame){
        //existe
        if(req.body.nome !== undefined) buscarGame.nome = req.body.nome;
        if(req.body.img !== undefined) buscarGame.img = req.body.img;
        res.status(200).json(buscarGame);

    }else{
        //não existe
        res.status(404).json({erro:"recurso não existe"})
    }
});



app.delete("/filmes/:id", (req,res) => {
    const buscarGame = jogos.findIndex(x => x.id === +req.params.id);
    console.log(buscarGame);
    if(buscarGame){
        scss
    }

    send("OK")

});



app.listen(8002);

