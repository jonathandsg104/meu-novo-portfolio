import express from 'express';
import Projeto from '../models/Projeto.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

const verifyToken = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ message: 'Acesso negado' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Token inválido' });
    }
};

// Buscar todos os projetos
router.get('/', async (req, res) => {
    try {
        const projetos = await Projeto.find();
        res.json(projetos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Criar um projeto
router.post('/', verifyToken, async (req, res) => {
    try {
        const novoProjeto = new Projeto(req.body);
        const projetoSalvo = await novoProjeto.save();
        res.status(201).json(projetoSalvo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Deletar um projeto
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const id = req.params.id.trim(); // Remover espaços em branco e caracteres de nova linha
        const projeto = await Projeto.findById(id);
        if (!projeto) {
            return res.status(404).json({ message: 'Projeto não encontrado' });
        }
        await Projeto.deleteOne({ _id: id });
        res.json({ message: 'Projeto deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;




