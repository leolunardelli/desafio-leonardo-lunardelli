const CaixaDaLanchonete = require('./caixa-da-lanchonete');

describe('CaixaDaLanchonete', () => {
  const caixa = new CaixaDaLanchonete();

  it('deve calcular o valor total da compra corretamente', () => {
    const valorTotal = caixa.calcularValorDaCompra('debito', ['cafe,1', 'chantily,1']);
    expect(valorTotal).toBe('R$ 4.50');
  });

  it('deve retornar mensagem de erro para forma de pagamento inválida', () => {
    const mensagem = caixa.calcularValorDaCompra('paypal', ['cafe,1']);
    expect(mensagem).toBe('Forma de pagamento inválida!');
  });
