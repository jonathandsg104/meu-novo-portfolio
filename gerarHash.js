const bcrypt = require('bcryptjs');

// Substitua 'gremio123' pela senha que você deseja criptografar
const senha = 'gremio123';
const hash = bcrypt.hashSync(senha, 10);

console.log('Hash gerado:', hash);
