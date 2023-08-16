# Caixa da Lanchonete

Este é um pequeno projeto de automação do caixa de uma lanchonete, desenvolvido em JavaScript.

## Funcionalidades

- Calcula o valor total da compra de acordo com os itens selecionados e a forma de pagamento.
- Aplica desconto para pagamento em dinheiro e acréscimo para pagamento a crédito.
- Verifica regras como pedidos de itens extras sem o principal.
- Validação de itens inválidos, formas de pagamento inválidas e outros cenários.

## Como usar

1. Instale o Node.js em sua máquina.

2. Instale as dependências do projeto com o seguinte comando:

```
npm install
```

3. Execute os testes para validar a solução:

```
npm test
```

4. Modifique ou adicione casos de teste em `testes-caixa-da-lanchonete.js` para verificar diferentes cenários.

## Estrutura de Arquivos

- `caixa-da-lanchonete.js`: Contém a classe `CaixaDaLanchonete` com a lógica de cálculo do valor da compra.
- `testes-caixa-da-lanchonete.js`: Contém os casos de teste utilizando Jest para validar a implementação.
