 //Função recebe 2 parametros, recebe uma lista de produtos e o local onde o html sera rendizado
 export function carregarProdutos(listaProdutos,localHTML) {
   listaProdutos.forEach(produto => {
    
         let html =` <div class="box" id="${produto. codigo_produto}">
                           <a href="#" class="fas fa-heart"></a>
                       <a href="#" class="fas fa-eye"></a>
                         <a href="./produto1.html">
                         <img src="${produto.imagem_produto}" alt="" id="${produto.codigo_produto}">
                         </a>
                       <h3>${produto.nome_produto}</h3>
                           <div class="stars">
                            <i class="fas  fa-star"></i>
                            <i class="fas  fa-star"></i>
                       <i class="fas  fa-star"></i>
                           <i class="fas  fa-star"></i>
                         <i class="fas  fa-star-half-alt"></i>
                         </div>
                         <span>R$ ${produto.preco_produto}</span>
                         <a href="./produto1.html"><button id="${produto. codigo_produto}"></button></a>
                         
                          
                      </div>`
                    localHTML.innerHTML += html
          
   });

}
//Funcao para clicar na pagina , para encontrar o prduto unico 
   export function handleClick(){
    let produtos = document.querySelectorAll("div.box")
    console.log(produtos)

    produtos.forEach(produto => produto.addEventListener ('click',(evento) => {
    
      let idProduto = evento.target.id
      localStorage.setItem('prodID',idProduto)
      console.log(idProduto)
      
    }))

   }
   export function findProduct(produtos, prodID){
    let produto = produtos.find(prod => prod.codigoProduto == prodID )
    return produto 
}


 export function addItemCarrinho(item, carrinhoCompras){
  let botaoComprar = document.querySelector('button')
     botaoComprar.addEventListener('click', () =>{
      let quantidade = parseInt(document.querySelector("#qtd").value)
      let newitem = {...item,quantidade}
      carrinhoCompras.push(newitem)
            alert("item adicionado ao carrinho")
             localStorage.setItem('carrinho',JSON.stringify(carrinhoCompras))
   
    })
 }

 //função para calcular o preço total
export function calcTotal(carrinhoCompras){
  let total = 0;

  const totalCarrinho = document.querySelector('.totalCarrinho')

  totalCarrinho.innerHTML = '';

  console.log(totalCarrinho)

  carrinhoCompras.forEach(item =>{
      total += (item.preco_produto * item.quantidade);
  })

  let totCarrinho = `<p>Total: R$ ${total.toFixed(2)}</p>`;

  totalCarrinho.innerHTML += totCarrinho;

}
// export function addItemCarrinho (item, carrinhoCompras){
//   let botaoComprar = document.querySelector('button')
//   botaoComprar.addEventListener('click', () => {
//       let quantidade = parseInt(document.querySelector('product-qtd-input').value)
//       let newItem = {...item,quantidade}
//       //item.quantidade = quantidade
//       carrinhoCompras.push(newItem)
//       alert("item adicionado ao carrinho")
//       localStorage.setItem('carrinho',JSON.stringify(carrinhoCompras))
// })
// }


 


 
//  for(let i =0; i< catalogo.length;i++){
//     let produto=` <div class="box">
//                   <a href="#" class="fas fa-heart"></a>
//                   <a href="#" class="fas fa-eye"></a>
//                   <img src="${catalogo[i].imagem_produto}" alt="">
//                   <h3>${catalogo[i].nome_produto}</h3>
//                   <div class="stars">
//                      <i class="fas  fa-star"></i>
//                      <i class="fas  fa-star"></i>
//                      <i class="fas  fa-star"></i>
//                      <i class="fas  fa-star"></i>
//                      <i class="fas  fa-star-half-alt"></i>
//                   </div>
//                   <span>R$ ${catalogo[i].preco_produto}</span>

                 
//                   <a href="produto1.html" class="btn">Comprar</a>
//               </div>`
//               grid_produto.innerHTML += produto
//

/// mechendo aqui 

