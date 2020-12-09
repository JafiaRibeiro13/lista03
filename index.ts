import { Produto } from './produto'; // exercicio 1
import { Contato } from './contato'; // exercicio 2
import { Televisao } from './televisao';    // exercicio 3
import { ControleRemoto } from './controleRemoto'; //exercicio 3

// Produto exercicio 1
let produtos = new Produto();
produtos.nome = "Cebola";
produtos.categoria = "verduras";
produtos.marca = "sem marca";
produtos.descricao = "verduras frescas";
produtos.preco = 2.99;
produtos.quantidade = 10;

console.log("Produto");
console.log("Nome: " + produtos.nome);
console.log("Categoria: " + produtos.categoria);
console.log("Marca: " + produtos.marca);
console.log("Descricao: " + produtos.descricao);
console.log("Preco: " + produtos.preco);
console.log("Quantidade: " + produtos.quantidade);

// Contato exercicio 2
let contatos = new Contato();

contatos.nome = "Jáfia";
contatos.gmail = "jafia1@email.com";
contatos.tele = "4002-8922";

console.log("Contato");
console.log("Nome: " + contatos.nome);
console.log("Email: " + contatos.gmail);
console.log("Telefone: " + contatos.tele);

// televisao e controleRemoto Exercicio 3
let televisao = new Televisao();
let controle = new ControleRemoto(televisao);

console.log("TV");
console.log("Canal: " + controle.canais);
console.log("Volume: " + controle.vol);

controle.volumeAlto();
controle.volumeminimo();
controle.canalMaximo(900);
controle.canalminimo(600);
controle.volumeAlto();
controle.volumeminimo();

console.log("Canal: " + controle.canais);
console.log("Volume: " + controle.vol);

controle.volumeminimo();
controle.canalminimo();

console.log("Canal: " + controle.canais);
console.log("Volume: " + controle.vol);