import User from "./User.js";

export default class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = "true") {
    super(nome, email, nascimento, role, ativo)
  }

  criarCurso(nomeCurso, qtdVagas) {
    return `curso ${nomeCurso} criado com ${qtdVagas} vagas.`
  }

}

// const novoAdmin = new Admin("Elara", "e@e.com", "2024-01-05")

// console.log(novoAdmin.exibirInfos());
// console.log(novoAdmin.exibeNome());
// console.log(novoAdmin.criarCurso('ADS', 35));
