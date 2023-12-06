import { calcTotal } from "./funcoes.js";


let carrinhoCompras = JSON.parse(localStorage.getItem('carrinho'))

//isso so funciona se meu endereço estiver na mesma pagina do carrinho
let pedidos = JSON.parse(localStorage.getItem("pedidos"))
if (pedidos == null){
    pedidos = []
}

console.log(carrinhoCompras)
if(carrinhoCompras == null){
    carrinhoCompras = []
}

let itensCarrinho = document.querySelectorAll

let cartlist = document.querySelector("table.cart-table tbody")
carrinhoCompras.forEach(item => {
  let html =`<tr class="cart-product">
  <td class="product-indification">
      <img class="cart-product-image" src="${item.imagem_produto}">
      <strong class="cart-product-title">${item.nome_produto}</strong>
  </td>
  <td>
      <span class="cart-product-price"> ${item.preco_produto}</span>
  </td>
  <td>  
      <div class="trash">
      <i class="fa-solid fa-trash"></i>
      </div>
  </td>
</tr>


  `
  cartlist.innerHTML +=html
    
});


let delBtn =document.querySelectorAll ('div.trash i')
delBtn.forEach(botao => botao.addEventListener("click", (event)=> {
    let item = event.target.parentElement.parentElement.parentElement
    cartlist.removeChild(item)
    let index = carrinhoCompras.findIndex(produtoitem=> produtoitem.codProduto == item.id)
    carrinhoCompras.splice(index,1)
    localStorage.setItem('carrinho',JSON.stringify(carrinhoCompras))

}))

//arrumar daqui para baixo para funcionar eu tenho que arrumar pagaina de endereco e meu botao que e link
//meu botao e um link
let comprar = document.querySelectorAll("div.input-botao")
comprar.forEach(botao => botao.addEventListener('click', ()=> {
    //ver no html meu formulario
    //puxando as informacoes do html
     let endereco = {
         nome: document.querySelector("input#name").value,
         estadoo: document.querySelector("select#Estados").value,
         endereço: document.querySelector("input#endereço").value,
         cep: document.querySelector('input#cep').value,
         bairro: document.querySelector('input#bairro').value,
         casa: document.querySelector('input#casa').value
     }

 //variavel cod do pedido , criou agora
   let codPedido = (pedidos.length)+1
    if(pedidos == null || pedidos == 0){
        codPedido = 1
    }

    //para gerar os pedidos
    let pedido = {
        itens: carrinhoCompras, 
        endereco: endereco, 
        id: codPedido
    }// crio um objeto que guarda uma lista de produtos e o endereco do comprador
    pedidos.push(pedido) // coloco o pedido na lista de pedidos
    localStorage.setItem('pedidos',JSON.stringify(pedidos))
    alert("pedido concluido")
    localStorage.removeItem("prodID")
    localStorage.removeItem("carrinho")
    location.reload()
   


}))

calcTotal(carrinhoCompras)





