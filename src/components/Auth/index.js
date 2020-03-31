export default {
  isAuthenticated: false,
  login() {
    this.isAuthenticated = true;
  },
  logout() {
    this.isAuthenticated = false;
  },
  nome: '',
  dispName(name) {
    this.nome = name;
    return this.nome;
  }
};
