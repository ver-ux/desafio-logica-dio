class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'atacou usando magia';
          break;
        case 'guerreiro':
          ataque = 'atacou usando espada';
          break;
        case 'monge':
          ataque = 'atacou usando artes marciais';
          break;
        case 'ninja':
          ataque = 'atacou usando shuriken';
          break;
        default:
          ataque = 'atacou';
      }
      console.log(`O ${this.tipo} ${ataque}`);
    }
  }
  
  const heroi1 = new Heroi('Aragorn', 35, 'guerreiro');
  const heroi2 = new Heroi('Gandalf', 1000, 'mago');
  const heroi3 = new Heroi('Bruce Lee', 32, 'monge');
  const heroi4 = new Heroi('Hanzo', 28, 'ninja');
  
  heroi1.atacar();
  heroi2.atacar();
  heroi3.atacar();
  heroi4.atacar();