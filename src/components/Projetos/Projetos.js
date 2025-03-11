import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaProjectDiagram } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const Projetos = () => {
    const [projetos, setProjetos] = useState([]);
    const [novoProjeto, setNovoProjeto] = useState({ titulo: '', descricao: '', link: '' });
    const [mensagem, setMensagem] = useState('');
    const [isAdmin, setIsAdmin] = useState(false); // Estado para autenticação de administrador
    const [showLogin, setShowLogin] = useState(false); // Estado para controlar a exibição do formulário de login
    const [credentials, setCredentials] = useState({ username: '', password: '' }); // Estado para credenciais de login

    useEffect(() => {
        axios.get('http://localhost:5000/api/projetos')
            .then(response => {
                setProjetos(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar projetos:', error);
                setMensagem('Erro ao buscar projetos');
            });
    }, []);

    const adicionarProjeto = (e) => {
        e.preventDefault();
        if (!isAdmin) {
            setMensagem('Acesso restrito ao administrador da página');
            setShowLogin(true); // Exibir o formulário de login se não for administrador
            return;
        }

        const token = localStorage.getItem('token');
        axios.post('http://localhost:5000/api/projetos', novoProjeto, {
            headers: { 'x-auth-token': token }
        })
            .then(response => {
                setProjetos([...projetos, response.data]);
                setNovoProjeto({ titulo: '', descricao: '', link: '' });
                setMensagem('Projeto adicionado com sucesso!');
            })
            .catch(error => {
                console.error('Erro ao adicionar projeto:', error.response ? error.response.data : error.message); // Log para depuração
                setMensagem('Erro ao adicionar projeto');
            });
    };

    const deletarProjeto = (id) => {
        const token = localStorage.getItem('token');
        axios.delete(`http://localhost:5000/api/projetos/${id}`, {
            headers: { 'x-auth-token': token }
        })
            .then(response => {
                setProjetos(projetos.filter(projeto => projeto._id !== id));
                setMensagem('Projeto deletado com sucesso!');
            })
            .catch(error => {
                console.error('Erro ao deletar projeto:', error.response ? error.response.data : error.message); // Log para depuração
                setMensagem('Erro ao deletar projeto');
            });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/auth/login', credentials)
            .then(response => {
                localStorage.setItem('token', response.data.token);
                setIsAdmin(true);
                setMensagem('');
                setShowLogin(false);
            })
            .catch(error => {
                console.error('Erro ao fazer login:', error.response ? error.response.data : error.message); // Log para depuração
                setMensagem('Credenciais inválidas');
            });
    };

    return (
        <div id="projetos" className="p-8 bg-white text-black shadow-md rounded-lg m-4 border border-gray-200">
            <h1 className="text-3xl font-semibold mb-4 text-center flex items-center justify-center">
                <FaProjectDiagram className="mr-2" /> Meus Projetos
            </h1>
            {mensagem && <p className="mb-4 text-center text-red-500">{mensagem}</p>}
            
            {showLogin ? (
                <form onSubmit={handleLogin} className="mb-4">
                    <div className="mb-2">
                        <input 
                            type="text"
                            placeholder="Usuário"
                            value={credentials.username}
                            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <input 
                            type="password"
                            placeholder="Senha"
                            value={credentials.password}
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-lg">Entrar</button>
                </form>
            ) : (
                <form onSubmit={adicionarProjeto} className="mb-4">
                    <div className="mb-2">
                        <input 
                            type="text"
                            placeholder="Título do Projeto"
                            value={novoProjeto.titulo}
                            onChange={(e) => setNovoProjeto({ ...novoProjeto, titulo: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <input 
                            type="text"
                            placeholder="Descrição do Projeto"
                            value={novoProjeto.descricao}
                            onChange={(e) => setNovoProjeto({ ...novoProjeto, descricao: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <input 
                            type="url"
                            placeholder="Link do Projeto (opcional)"
                            value={novoProjeto.link}
                            onChange={(e) => setNovoProjeto({ ...novoProjeto, link: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-lg">Adicionar Projeto</button>
                </form>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projetos.map((projeto) => (
                    <div key={projeto._id} className="border p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white text-black text-center">
                        <h2 className="text-2xl font-bold mb-2">{projeto.titulo}</h2>
                        <p className="mb-4">{projeto.descricao}</p>
                        <div className="flex justify-center space-x-4 mt-2">
                            {projeto.link && (
                                <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                                    Ver Projeto
                                </a>
                            )}
                            <button onClick={() => deletarProjeto(projeto._id)} className="text-red-500 flex items-center justify-center">
                                <FaTrash className="mr-2" /> Deletar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projetos;








