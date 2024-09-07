import User from "./User.js";

export default class Docente extends User {
  constructor(nome, email, nascimento, role = "docente", ativo = "true") {
    super(nome, email, nascimento, role, ativo)
  }

  aprovarEstudante(estudante, curso) {
    return `estudante ${estudante} passou no curso de ${curso}, responsável ${this.nome}.`
  }
}

const novoDocente = new Docente("Eryon", "e@e.com", "2024-01-06")
// console.log(novoDocente.aprovarEstudante('Ana', 'JavaScript'));
