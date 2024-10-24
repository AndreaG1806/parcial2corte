function calculate(operation) {
    let num1 = parseFloat(document.getElementById('num1').value) || 0;
    let num2 = parseFloat(document.getElementById('num2').value) || 0;
    let result;

    switch (operation) {
        case 'sum':
            result = num1 + num2;
            break;
        case 'rest':
            result = num1 - num2;
            break;
        case 'mult':
            result = num1 * num2;
            break;
        case 'div':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Error: División por cero';
            }
            break;
        default:
            result = 'Operación no válida';
    }

    document.getElementById('result').value = result;
}
