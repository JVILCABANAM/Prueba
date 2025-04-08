function calcular() {

    // Obtener los valores de los inputs
  
    let num1 = parseFloat(document.getElementById('num1').value);
  
    let num2 = parseFloat(document.getElementById('num2').value);
  
    let operation = document.getElementById('operation').value;
  
    let result = 0;
  
  
  
    // Verificar si los valores son números válidos
  
    if (isNaN(num1) || isNaN(num2)) {
  
      alert("Por favor, ingresa dos números válidos.");
  
      return;
  
    }
  
  
  
    // Realizar la operación según la selección
  
    switch (operation) {
  
      case 'sum':
  
        result = num1 + num2;
  
        break;
  
      case 'subtract':
  
        result = num1 - num2;
  
        break;
  
      case 'multiply':
  
        result = num1 * num2;
  
        break;
  
      case 'divide':
  
        if (num2 === 0) {
  
          alert("No se puede dividir por cero.");
  
          return;
  
        }
  
        result = num1 / num2;
  
        break;
  
      default:
  
        alert("Operación no válida.");
  
        return;
  
    }
  
  
  
    // Mostrar el resultado en el HTML
  
    document.getElementById('result').textContent = result;
  
  }