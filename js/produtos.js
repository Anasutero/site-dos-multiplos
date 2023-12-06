import { catalogo } from "../js/dados.js";
import { carregarProdutos, handleClick } from "../js/funcoes.js";

let carrinhoCompras = JSON.parse(localStorage.getItem('carrinho'))

if(carrinhoCompras == null){
    carrinhoCompras = []
}

 const produtos = document.querySelector(".box-container")


 carregarProdutos(catalogo,produtos)
 handleClick() 

