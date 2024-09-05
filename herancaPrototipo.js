const user = {
  nome: "Lyra",
  email: "l@l.com",
  nascimento: "2024-01-02",
  role: "estudante",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

const admin = {
  nome: "Estelle",
  email: "e@e.com",
  nascimento: "2024-01-03",
  role: "admin",
  ativo: true,
  criarCurso: function () {
    console.log('curso criado');
  }
};

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();