document.getElementById('btnCalcular').addEventListener('click', calcular);

function calcular() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const operacao = document.getElementById('operacao').value;

    if (num1 === '' || num2 === '') {
        document.getElementById('resultado').textContent = 'Preencha os dois números';
        return;
    }

    const n1 = Number(num1);
    const n2 = Number(num2);

    let resultado;

    switch (operacao) {
        case '+':
            resultado = n1 + n2;
            break;
        case '-':
            resultado = n1 - n2;
            break;
        case '*':
            resultado = n1 * n2;
            break;
        case '/':
            if (n2 === 0) {
                resultado = 'não é possível dividir por zero';
            } else {
                resultado = n1 / n2;
            }
            break;
        case '^':
            resultado = Math.pow(n1, n2);
            break;
        case '%':
            resultado = (n1 * n2) / 100;
            break;
        default:
            resultado = 'Operação inválida';
    }

    document.getElementById('resultado').textContent = resultado;
}