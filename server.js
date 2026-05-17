import express from 'express';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

// Permite que o Front-end acesse o Back-end sem erros de CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// Criando a rota segura para a NASA
app.get('', async (req, res) => {
    try {
        const apiKey = process.env.CAT_API_KEY;
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&api_key=${apiKey}`);
        const data = await response.json();
        
        // Devolve os dados da NASA para o seu Front-end
        res.json(data); 
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar dados de gatos"});
    }
});

// Liga o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});