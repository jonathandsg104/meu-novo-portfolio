import mongoose from 'mongoose';

const ProjetoSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    link: { type: String },
    tecnologia: [String], // Lista de tecnologias usadas
});

const Projeto = mongoose.model('Projeto', ProjetoSchema);

export default Projeto; // Exportação padrão

