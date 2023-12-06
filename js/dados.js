// criação da array para guardar os produtos
//Inicio dos produtos que são mostrados na home
export const catalogo = [{
  codigo_produto: 1,
  nome_produto: "Balção Planejado MDF Cor Madeirada",
  descricao_produto: "Disponível no material MDF (Chapa de fibra de madeira de média densidade, material de alta resistência cujas fibras possibilitam trabalhos industriais com acabamentos mais precisos). Em todos nossos balcões utilizamos parafusos reforçados e corrediças telescópicas.Além de ser planejado para o seu conforto e condição",
  preco_produto: 15000.00,
  imagem_produto: "../img/produto1.jpeg",
  categoria: "promocoes"
},

{
  codigo_produto: 2,
  nome_produto: "Painel Ripado De Sala Com Led Mdf",
  descricao_produto: "O painel rapidao de sala é um móvel moderno e funcional para salas. Feito em MDF de alta qualidade, possui um design ripado contemporâneo. Equipado com LEDs integrados, oferece iluminação suave. Além de servir como suporte para a TV, é uma peça de destaque que organiza dispositivos eletrônicos e eleva o apelo estético da sala. Ideal para momentos de entretenimento e relaxamento.",
  preco_produto: 7000.00,
  imagem_produto: "../img/produto2.jpeg",
  categoria:"promocoes"
},

{
  codigo_produto: 3,
  nome_produto: "Armario De Quarto Planejado Mdf Cor Marrom",
  descricao_produto: " é uma escolha sofisticada para qualquer quarto. Feito com material durável em MDF e acabamento em cor marrom, este armário oferece elegância e funcionalidade. Seu design planejado maximiza o espaço de armazenamento, proporcionando organização para roupas e acessórios. Complementando diversos estilos de decoração, este armário é a opção ideal para quem busca qualidade, praticidade e um toque de modernidade no quarto. ",
  preco_produto: 12900.00,
  imagem_produto: "../img/produto3.PNG",
  categoria:"promocoes"
},
//Fim dos produtos  da home

//Inicio produtos da pagina de produtos
{
  codigo_produto: 4,
  nome_produto: "Cozinha Plenejada Em MDF Branco",
  descricao_produto: "Fabricada com material durável em MDF na cor branca, esta cozinha oferece um visual limpo e contemporâneo. Seu design planejado otimiza o espaço, proporcionando amplo armazenamento para utensílios, panelas e alimentos. Além da funcionalidade, o acabamento em branco confere um ambiente luminoso e espaçoso, ideal para cozinhas de qualquer tamanho. ",
  preco_produto: 8100.00,
  imagem_produto: "../img/produto4 (2).PNG",
  categoria:""
},

{
codigo_produto: 5,
nome_produto: "Armario Superior Metalica Decorativa.",
descricao_produto: " é uma peça versátil e estilosa para qualquer espaço. Fabricado em metal resistente, este armário oferece não apenas funcionalidade, mas também um toque decorativo ao ambiente. Ideal para cozinhas, áreas de serviço ou espaços de trabalho, este armário superior é perfeito para armazenar itens delicados ou exibir objetos decorativos. Seu design metálico adiciona um toque industrial e moderno à decoração, enquanto as portas decorativas proporcionam um toque elegante. Além de sua aparência estética, este armário oferece soluções práticas de armazenamento, combinando estilo e utilidade de forma harmonios",
preco_produto: 4000.25,
imagem_produto: "../img/produto5.PNG",
categoria:""
},

{
codigo_produto: 6,
nome_produto: "Guarda- Roupa Planejado MDF Branco",
descricao_produto: " Fabricado com material durável em MDF na cor branca, este guarda-roupa oferece um visual moderno e clean. Seu design planejado maximiza o espaço de armazenamento, proporcionando compartimentos organizados para roupas, sapatos e acessórios. Além da praticidade, o acabamento em branco confere ao ambiente uma sensação de amplitude e luminosidade, criando uma atmosfera agradável no quarto. Este guarda-roupa planejado combina estilo e utilidade, oferecendo um toque de sofisticação ao espaço.",
preco_produto: 9500.50,
imagem_produto: "../img/produto6 (2).PNG",
categoria:""
},
{
codigo_produto: 7,
nome_produto: "Cozinha Plenejada Com Forno Embutido MDF Marrom",
descricao_produto: "Fabricada com MDF de alta qualidade na tonalidade marrom, esta cozinha oferece um visual sofisticado e acolhedor. O design planejado proporciona espaços amplos e organizados, enquanto o forno embutido economiza espaço e oferece funcionalidade moderna. Além da praticidade, o acabamento em marrom confere um toque de elegância, criando uma atmosfera aconchegante na cozinha. Esta cozinha planejada combina estilo, funcionalidade e praticidade, transformando o espaço em um ambiente convidativo e moderno.",
preco_produto: 9500.50,
imagem_produto: "../img/produto7.PNG",
categoria:""
},
{
codigo_produto: 8,
nome_produto: "Balção Em L De Pia MDF Madeirado",
descricao_produto: " é uma solução versátil e elegante para cozinhas planejadas. Feito com MDF de alta qualidade em tonalidade madeirada, este balcão em forma de L é projetado para otimizar o espaço ao redor da pia. Além de oferecer um visual natural e sofisticado, o balcão proporciona um amplo espaço de trabalho e armazenamento. Seu design inteligente permite uma organização eficiente dos utensílios de cozinha, enquanto o acabamento madeirado adiciona um toque de calor e charme ao ambiente. Ideal para cozinhas modernas que buscam funcionalidade e estilo harmoniosamente combinados.",
preco_produto: 5000.00,
imagem_produto: "../img/produto8.PNG",
categoria:""
},
{
codigo_produto: 9,
nome_produto: "Gabinete Banheiro, Puchara Grafte Em Aluminio",
descricao_produto: "Fabricado em alumínio, este gabinete oferece resistência à umidade e ao desgaste, tornando-o ideal para ambientes úmidos como o banheiro. A tonalidade grafite confere um visual moderno e elegante, complementando diversos estilos de decoração. Além da estética, o gabinete oferece espaço de armazenamento para produtos de higiene pessoal e toalhas, ajudando a manter o banheiro organizado. Prático e estiloso, é uma adição funcional e atraente para qualquer banheiro.",
preco_produto: 3500.25,
imagem_produto: "../img/produto9.PNG",
categoria:""
}

]
//Fim dos produtos da pagina de produtos

// mostra no console as informações da array catalogo no índice 3
// console.log(catalogo[3])

// criou uma função que vai servir para mostrar os produtos
// function mostrar_produtos(){
//   let produto = catalogo[3]
//   let card_produto = `<div class="product_card" id="card">
//       <a href="produto2.html">
//           <img class="product_image" src="${produto.imagem_produto}">
//       </a>
//   </div>`
//   console.log(`O produto de código ${produto.codigo_produto} custa R$ ${produto.preco_produto}`)
//   let grid_produto = document.querySelector("#home_product_grid")
//   grid_produto.innerHTML = card_produto
  
// }

// mostrar_produtos()





