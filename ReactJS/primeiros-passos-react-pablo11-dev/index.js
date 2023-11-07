const { useState } = React;

const App = () => {
  const [cart, setCart] = useState(0);
  const [total, setTotal] = useState(0);
  const [carrinho, setCarrinho] = useState(0);

  const add = () => {
      setCart(cart + 1);
      setTotal(total + 59.99);
  };

  const remover = () => {
      if (cart > 0) {
          setCart(cart - 1);
          setTotal(total - 59.99);
      }
  };
  const addCarrinho = () => {
      setCarrinho(carrinho + cart);
  };
  return (
    <div>
      <nav class="nav navbar">
        <div class="container">
          Minha Loja
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check psiu" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
            </svg>
            <span class="badge text-bg-danger">{carrinho}</span>
          </div> 
        </div>
</nav>
        <div class="tudo">
            <div>
                <img class="img" src="./img/camisa-vermelha.jpg" alt=""></img>
            </div>
            <div class="cont">
                <p>R$59,99</p>
                <h1 class="nome">Camisa Vermelha</h1>
                <p class="frase">Essa é uma camisa vermelha 
                    feita de algodão com detalhes 
                    preto e vermelho.
                </p>
                <div class="cont-2">
                    <button class="add" onClick={remover}>-</button>
                    <label class="quant" for="">{cart}</label>
                    <button class="add" onClick={add}>+</button>
                    <button class="add-car" onClick={addCarrinho}>Adicionar ao Carrinho</button>
                    <p>Total:{total.toFixed(2)}</p>
            
                </div>
            </div>
        </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)


console.log (c, b)
