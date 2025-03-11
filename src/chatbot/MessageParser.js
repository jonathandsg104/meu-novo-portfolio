class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes("experiência") || lowerCaseMessage.includes("trabalho") || lowerCaseMessage.includes("empregos")) {
            this.actionProvider.handleExperience();
        } else if (lowerCaseMessage.includes("formação") || lowerCaseMessage.includes("educação") || lowerCaseMessage.includes("estudos")) {
            this.actionProvider.handleEducation();
        } else if (lowerCaseMessage.includes("habilidades") || lowerCaseMessage.includes("skills") || lowerCaseMessage.includes("competências")) {
            this.actionProvider.handleSkills();
        } else if (lowerCaseMessage.includes("cursos") || lowerCaseMessage.includes("complementares") || lowerCaseMessage.includes("formação extra")) {
            this.actionProvider.handleCourses();
        } else if (lowerCaseMessage.includes("contato") || lowerCaseMessage.includes("email") || lowerCaseMessage.includes("telefone") || lowerCaseMessage.includes("linkedin") || lowerCaseMessage.includes("github")) {
            this.actionProvider.handleContact();
        } else {
            this.actionProvider.handleUnknown();
        }
    }
}

export default MessageParser;




