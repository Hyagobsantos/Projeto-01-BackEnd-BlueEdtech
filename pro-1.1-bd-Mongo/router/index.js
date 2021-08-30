const express = require("express");
const {listarTodos, novoJogo, listarPorId, atualizarJogo,excluirJogo} = require("../controller/jogos")
const router = express();

router.get("/jogos", listarTodos);
router.get("/jogos/:id", listarPorId)
router.post("/jogos", novoJogo);
router.put("/jogos/:id", atualizarJogo);
router.delete("/jogos/:id",excluirJogo);

module.exports = router