[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/E-bguk7w)
# Atividade - Primeiros passos React 

## Instruções para a execução da atividade:

1. Importe as dependências em seu projeto no index.html:
- React 
- ReactDOM
- Babel

2. Links das dependências:
```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

3. Crie um elemento com id="app" no body do index.html:
```html
<body>
  <div id="app"></div>
</body>
```

4. Crie um arquivo index.js e importe-o no index.html:
```html
<script src="index.js" type="text/babel"></script>
```

5. Crie um componente chamado App e renderize-o no elemento com id="app":
```js
const App = () => {
  return (
    <div>
      // Construa a sua aplicação aqui
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
```

6. Utilize a sintaxe JSX para criar os elementos da sua aplicação:

7. Utiilize o metodo useState para gerenciar os estados do seu componente:

8. Utilize o bootstrap para estilizar a sua aplicação:

## Exemplo de como deve ficar a sua aplicação:
![image](./img/exemplo%20de%20interface.png)

## Especificações da aplicação:
- Ao clicar no botão adicionar ao carrinho, deve ser alterado a notificação do carrinho para o número de itens adicionados.

- Ao clicar em adicionar ou remover quantidade de itens, deve ser alterado o valor total do produto.





