class CaixaDaLanchonete {
  constructor() {
    this.cardapio = [
      { codigo: 'cafe', descricao: 'Café', valor: 3.00 },
      { codigo: 'chantily', descricao: 'Chantily (extra do Café)', valor: 1.50 },
      { codigo: 'suco', descricao: 'Suco Natural', valor: 6.20 },
      { codigo: 'sanduiche', descricao: 'Sanduíche', valor: 6.50 },
      { codigo: 'queijo', descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
      { codigo: 'salgado', descricao: 'Salgado', valor: 7.25 },
      { codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
      { codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.50 },
    ];

    this.formasDePagamento = ['dinheiro', 'debito', 'credito'];
    this.descontoDinheiro = 0.05;
    this.acrescimoCredito = 0.03;
  }

  calcularValorDaCompra(formaDePagamento, itens) {
    let valorTotal = 0;

    for (const item of itens) {
      const [codigo, quantidade] = item.split(',');
      const menuItem = this.cardapio.find(item => item.codigo === codigo);
      if (!menuItem) {
        return "Item inválido!";
      }

      if (codigo.endsWith('extra')) {
        const codigoPrincipal = codigo.replace('extra', '');
        if (!itens.includes(`${codigoPrincipal},${quantidade}`)) {
          return "Item extra não pode ser pedido sem o principal";
        }
      }
      
      valorTotal += menuItem.valor * parseInt(quantidade);
    }

    if (!this.formasDePagamento.includes(formaDePagamento)) {
      return "Forma de pagamento inválida!";
    }
    
    if (formaDePagamento === 'dinheiro') {
      valorTotal *= (1 - this.descontoDinheiro);
    } else if (formaDePagamento === 'credito') {
      valorTotal *= (1 + this.acrescimoCredito);
    }

    if (valorTotal === 0) {
      return "Não há itens no carrinho de compra!";
    }

    return `R$ ${valorTotal.toFixed(2)}`;
  }
}

module.exports = CaixaDaLanchonete;
