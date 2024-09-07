import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User("Flavia", "f@f.com", "2024-01-01");
// console.log(novoUser.exibirInfos());
console.log(novoUser.exibirInfos());

// novoUser.#nome = "Mariana";
// console.log(novoUser.exibirInfos());
// console.log(novoUser.#nome);

const novoAdmin = new Admin("Elara", "e@e.com", "2024-01-05")

console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.exibeNome());