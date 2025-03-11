import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'; // Adicionar esta linha

dotenv.config(); // Adicionar esta linha

const router = express.Router();

const adminUsername = process.env.ADMIN_USERNAME;
const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

console.log('Admin Username:', adminUsername); // Adicionar log para verificar o valor
console.log('Admin Password Hash:', adminPasswordHash); // Adicionar log para verificar o valor

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username !== adminUsername || !bcrypt.compareSync(password, adminPasswordHash)) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

export default router;




