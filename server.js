const app = require("./src/app")
const PORT = process.env.PORT || 3030

app.get("/", (req, res) => {
    res.send({ message: "Boas-vindas à T-MEMORY API"})
})

app.listen(PORT, () => console.log(`tá rolando na porta ${PORT}`))

