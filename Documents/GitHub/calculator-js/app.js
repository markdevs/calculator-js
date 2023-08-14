  class Calculadora {
     // Iniciar input com valor 0
      constructor() {
        this.valorAtual = 0;
        this.operador = '';
      }
      //Método - Adicionar o input valores dos botões clicados
      appendToDisplay(valor) {
        document.getElementById('display').value += valor;
      }
        //Método - Limpar display
      clearDisplay() {
        document.getElementById('display').value = '';
        this.valorAtual = 0;
        this.operador = '';
      }
        //Método - Calcular resultado
      calculateResult() {
        const expressao = document.getElementById('display').value;
        this.valorAtual = eval(expressao);
        document.getElementById('display').value = this.valorAtual;
      }
    }

    const minhaCalculadora = new Calculadora();
