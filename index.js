import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// Determina o diretório atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, "public")));

// Rota para o caminho raiz
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Rota para buscar informações de um Pokémon
app.get("/pokemon/:name", async (req, res) => {
    const { name } = req.params;
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        if (!response.ok) {
            return res.status(404).json({ error: "Pokémon não encontrado" });
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar dados do Pokémon" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
