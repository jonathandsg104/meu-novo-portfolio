class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    handleExperience = () => {
        const message = this.createChatBotMessage("Tenho experiência como proprietário da Galo Placas Veiculares Ltda, e também como estampador na Schmidt Placas e Lacres para Veículos. Antes disso, fui auxiliar administrativo no Comércio de Pedras Araçá.");
        this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    };

    handleEducation = () => {
        const message = this.createChatBotMessage("Sou formado em Tecnologia da Informação e Comunicação pela Universidade Federal de Santa Catarina (UFSC). Também estudei Ciência da Computação na UNESC.");
        this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    };

    handleSkills = () => {
        const message = this.createChatBotMessage("Minhas habilidades incluem desenvolvimento em JavaScript, criação de interfaces com React, programação para dispositivos móveis com React Native, desenvolvimento de backend com Node.js e manipulação de bancos de dados com SQL.");
        this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    };

    handleCourses = () => {
        const message = this.createChatBotMessage("Completei o curso de Fullstack JavaScript pela OneBitcode em 2022.");
        this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    };

    handleContact = () => {
        const message = this.createChatBotMessage("Você pode entrar em contato comigo pelo telefone (48) 9 9657 3094 ou pelo e-mail jonathan.dsg104@gmail.com. Também estou disponível no LinkedIn e GitHub, nos seguintes links:\n\nLinkedIn: www.linkedin.com/in/jonathangomes104\nGitHub: jonathandsg104");
        this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    };

    handleUnknown = () => {
        const message = this.createChatBotMessage("Desculpe, não entendi sua pergunta. Posso ajudar com informações sobre minha experiência, formação, habilidades ou contato.");
        this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    };
}

export default ActionProvider;




