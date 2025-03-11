import React from 'react';
import { FaInfoCircle, FaGraduationCap, FaBriefcase, FaClipboardList, FaCogs, FaCode } from 'react-icons/fa';

const Sobre = () => {
    return (
        <div id="sobre" className="p-8 bg-white text-black shadow-md rounded-lg m-4 border border-gray-200">
            <h1 className="text-3xl font-semibold mb-4 text-center flex items-center justify-center">
                <FaInfoCircle className="mr-2" /> Sobre Mim
            </h1>
            <div className="bg-lightblue-100 p-4 rounded-md border border-gray-200 mb-4">
                <p className="text-base">
                    Sou um profissional apaixonado por tecnologia, com perfil organizado, ético e comunicativo. Sempre busco novos desafios e aprendizado contínuo para me desenvolver na área de tecnologia. Meu objetivo é crescer profissionalmente, adquirindo mais conhecimento e experiência.
                </p>
                <p className="text-base mt-4">
                    Com formação em Tecnologia da Informação e Comunicação, e experiência em funções administrativas e operacionais, estou em transição para a área de desenvolvimento, focando em programação com JavaScript, React, Node.js, TypeScript e React Native. Tenho habilidades em comunicação, trabalho em equipe e resolução de problemas. Estou motivado a aplicar meus conhecimentos em projetos de desenvolvimento de software, contribuindo para o crescimento e inovação da empresa.
                </p>
            </div>
            <h2 className="text-2xl font-bold mt-8 flex items-center"><FaGraduationCap className="mr-2" /> Formação Acadêmica</h2>
            <div className="bg-lightblue-100 p-4 rounded-md border border-gray-200 mb-4">
                <ul className="list-disc pl-5">
                    <li>Tecnologia da Informação e Comunicação - Universidade Federal de Santa Catarina (UFSC) | Concluído em 2019</li>
                    <li>Ciência da Computação (Incompleto) - Universidade do Extremo Sul Catarinense (UNESC)</li>
                </ul>
            </div>
            <h2 className="text-2xl font-bold mt-8 flex items-center"><FaBriefcase className="mr-2" /> Experiência Profissional</h2>
            <div className="bg-lightblue-100 p-4 rounded-md border border-gray-200 mb-4">
                <div className="job mt-4">
                    <h3 className="text-xl font-semibold">Proprietário - Galo Placas Veiculares Ltda</h3>
                    <p className="italic">Jacinto Machado-SC | Agosto 2022 - Atual</p>
                    <ul className="list-disc pl-5">
                        <li>Gestão administrativa e operacional da empresa, assegurando o cumprimento de prazos e metas estabelecidas.</li>
                        <li>Comunicação com clientes e parceiros comerciais, garantindo relacionamentos duradouros e satisfatórios.</li>
                        <li>Coordenação de processos internos, incluindo vendas, controle de estoque e gestão de entregas de produtos.</li>
                        <li>Acompanhamento financeiro, como controle de fluxo de caixa e planejamento de custos e investimentos.</li>
                        <li>Desenvolvimento de estratégias comerciais para aumento de vendas e expansão da clientela, com foco em resultados sustentáveis.</li>
                    </ul>
                </div>
                <div className="job mt-4">
                    <h3 className="text-xl font-semibold">Estampador - Schmidt Placas e Lacres para Veículos</h3>
                    <p className="italic">Jacinto Machado-SC | Agosto 2020 - Agosto 2022</p>
                    <ul className="list-disc pl-5">
                        <li>Gerenciamento e operação do sistema de emplacamento de veículos, garantindo precisão e eficiência.</li>
                        <li>Comunicação corporativa, coordenando departamentos e clientes para otimização de processos.</li>
                        <li>Apoio nas atividades financeiras, incluindo controle de contas a pagar e receber, e conciliação de valores.</li>
                        <li>Execução de atividades administrativas, controle de estoque e fornecimento de relatórios gerenciais.</li>
                        <li>Manutenção de documentação e registros relacionados aos veículos e emplacamentos, assegurando conformidade legal.</li>
                    </ul>
                </div>
                <div className="job mt-4">
                    <h3 className="text-xl font-semibold">Auxiliar Administrativo - Comércio de Pedras Araçá</h3>
                    <p className="italic">Jacinto Machado-SC | Novembro 2011 - Julho 2020</p>
                    <ul className="list-disc pl-5">
                        <li>Coordenação das atividades administrativas, garantindo eficiência operacional e cumprimento de políticas internas.</li>
                        <li>Atendimento a clientes por diversos canais, fornecendo informações detalhadas e direcionando-os aos setores competentes.</li>
                        <li>Organização e controle de documentos e arquivos físicos e digitais, melhorando o fluxo de trabalho da equipe.</li>
                        <li>Controle de entrada e saída de cargas, garantindo precisão no registro e acompanhamento logístico.</li>
                        <li>Apoio nas operações de vendas e compras, contribuindo para o bom andamento das transações e controle de estoque.</li>
                    </ul>
                </div>
            </div>
            <h2 className="text-2xl font-bold mt-8 flex items-center"><FaClipboardList className="mr-2" /> Cursos Complementares</h2>
            <div className="bg-lightblue-100 p-4 rounded-md border border-gray-200 mb-4">
                <ul className="list-disc pl-5">
                    <li>Fullstack JavaScript | OneBitcode | 2022</li>
                </ul>
            </div>
            <h2 className="text-2xl font-bold mt-8 flex items-center"><FaCogs className="mr-2" /> Habilidades</h2>
            <div className="bg-lightblue-100 p-4 rounded-md border border-gray-200 mb-4">
                <ul className="list-disc pl-5">
                    <li>Desenvolvimento em JavaScript</li>
                    <li>Criação de interfaces com React</li>
                    <li>Programação para dispositivos móveis com React Native</li>
                    <li>Desenvolvimento de backend com Node.js</li>
                    <li>Manipulação de bancos de dados com SQL</li>
                </ul>
            </div>
        </div>
    );
};

export default Sobre;





