import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; // Certifique-se de importar dotenv
import connectDB from './config/db.js';
import projetosRoutes from './routes/projetos.js';
import authRoutes from './routes/auth.js';

dotenv.config(); // Certifique-se de carregar as variáveis de ambiente

console.log('Ambiente:', process.env); // Adicionar log para verificar todas as variáveis de ambiente

const app = express();

app.use(cors());
connectDB();
app.use(express.json());
app.use('/api/projetos', projetosRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
