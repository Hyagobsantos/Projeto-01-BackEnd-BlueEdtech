const app = require("./servidor");
let porta = 3001;

app.listen(porta, () => {
    console.log(`Rodando em http:localhost:${porta}`)
});