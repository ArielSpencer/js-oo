import User from "./User.js";

class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = "true") {
    super(nome, email, nascimento, role, ativo)
  }
}

const novoAdmin = new Admin("Elara", "e@e.com", "2024-01-05")

console.log(novoAdmin);
console.log(novoAdmin.exibirInfos());
