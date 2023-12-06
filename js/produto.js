import { catalogo } from "./dados.js";
import { addItemCarrinho } from "./funcoes.js";
let codProduto = localStorage.getItem("prodID")

let item = catalogo.find(produto => produto.codigo_produto == codProduto)

let container = document.querySelector("main section div.container")

let carrinhoCompras = JSON.parse(localStorage.getItem('carrinho'))

console.log(carrinhoCompras)
if(carrinhoCompras == null){
    carrinhoCompras = []
}

let html = `  <div class="left-side">
<div class="items">
    <div class="select-image">
        <img src="${item.imagem_produto}" alt="">
    </div>
    
</div>


</div>
<div class="right-side">
<div class="content">
    <h3>Multiplos</h3>
<h2>${item.nome_produto}</h2>
<p>${item.descricao_produto}</p>
<div class="prices">
<span class="price">R$${item.preco_produto}</span>
<input id="qtd" class="product-qtd-input" type="number" value="1" min="0">
</div>

 <button class="btn">Adicionar ao carrinho</button>

</div>
</div>


</div>`

container.innerHTML = html

// carregarProduto(item)
addItemCarrinho(item, carrinhoCompras)