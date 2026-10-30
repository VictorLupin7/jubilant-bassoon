const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({
        status: true,
        empresa: "Datacenter APIs",
        mensagem: "API online",
        versao: "1.0"
    });
});

app.get("/status", (req, res) => {
    res.json({
        online: true,
        uptime: process.uptime()
    });
});

app.listen(process.env.PORT || 3000, "0.0.0.0");
