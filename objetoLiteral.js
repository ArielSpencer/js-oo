const user = {
  nome: 'Lunaris Solara',
  email: 'l@s.com',
  nascimento: '2024-01-01',
  role: 'estudante',
  ativo: true, // default
  exibirInfos: function () {
    console.log(this.nome, this.email);
  }
}

// user.exibirInfos()

// const exibir = user.exibirInfos
// exibir()

const exibir = function () {
  console.log(this.nome, this.email);
}

const exibirNome = exibir.bind(user);
exibirNome();