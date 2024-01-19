// Obtención de elementos del DOM:
const input = document.getElementById('inputBox');
const btns = document.querySelectorAll('button');

// Función para evaluar expresiones de manera segura:
function evaluateExpression(expression) {
  try {
    return eval(expression);
  } catch (error) {
    return 'Error';
  }
}

// Inicialización de variables:
let currentExpression = '';

// Iteración sobre los botones y asignación de eventos:
btns.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    handleButtonClick(e.target.innerHTML);
  });
});

// Función para manejar clics en los botones:
function handleButtonClick(value) {
  switch (value) {
    case '=':
      handleEquals();
      break;
    case 'AC':
      handleAllClear();
      break;
    case 'DEL':
      handleDelete();
      break;
    default:
      handleNumberOrOperator(value);
  }
}

// Funciones para cada tipo de botón:
function handleEquals() {
  currentExpression = evaluateExpression(currentExpression);
  input.value = currentExpression;
}

function handleAllClear() {
  currentExpression = '';
  input.value = '';
}

function handleDelete() {
  currentExpression = currentExpression.slice(0, -1);
  input.value = currentExpression;
}

function handleNumberOrOperator(value) {
  currentExpression += value;
  input.value = currentExpression;
}
