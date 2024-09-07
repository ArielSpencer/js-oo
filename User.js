export default class User {
  #nome
  #email
  #nascimento
  #role
  #ativo
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome
    this.#email = email
    this.#nascimento = nascimento
    this.#role = role || "estudante" // default estudante
    this.#ativo = ativo
  }

  exibirInfos() {
    return `${this.#nome}, ${this.#email}`
  }
}

const novoUser = new User('Beatriz', 'b@b.com', '2024-01-04')

// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(novoUser));