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

  get nome() {
    return this.#nome
  }

  get email() {
    return this.#email
  }

  get nascimento() {
    return this.#nascimento
  }

  get role() {
    return this.#role
  }

  get ativo() {
    return this.#ativo
  }

  exibirInfos() {
    const objUser = this.#montaObjUser();
    return `${objUser.nome}, ${objUser.email}`;
  }
}

const novoUser = new User('Beatriz', 'b@b.com', '2024-01-04')

// console.log(novoUser);
// console.log(novoUser.exibirInfos());

// console.log(User.prototype.isPrototypeOf(novoUser));