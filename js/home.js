import { catalogo } from "../js/dados.js";
import { carregarProdutos, handleClick} from "../js/funcoes.js";


const produtosPromo = catalogo.filter(produto => produto.categoria === "promocoes")
const promocoes = document.querySelector(".box-container")




carregarProdutos(produtosPromo,promocoes)
handleClick()
