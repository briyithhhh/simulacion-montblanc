function calcularFuncion(x) {
    return 3 * Math.pow(x, 2) + 2 * x;
}

const limiteInferior = 2;
const limiteSuperior = 3;

function calcularIntegralMatematica() {
    const resultadoSuperior = Math.pow(limiteSuperior, 3) + Math.pow(limiteSuperior, 2);
    const resultadoInferior = Math.pow(limiteInferior, 3) + Math.pow(limiteInferior, 2);
    return resultadoSuperior - resultadoInferior;
}

function calcularError(valorAproximado) {
    const valorReal = calcularIntegralMatematica();
    return Math.abs(valorReal - valorAproximado) / valorReal * 100;
}

const cantidadSimulacionesInput = prompt("Ingrese la cantidad de veces que se ejecutará la simulación: ");
const cantidadSimulaciones = cantidadSimulacionesInput !== null ? parseInt(cantidadSimulacionesInput) || 0 : 0;

let sumaResultados = 0;
let maximoResultado = Number.MIN_SAFE_INTEGER;
let minimoResultado = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < cantidadSimulaciones; i++) {
    const valorAleatorio = Math.random() * (limiteSuperior - limiteInferior) + limiteInferior;
    const resultadoFuncion = calcularFuncion(valorAleatorio);
    sumaResultados += resultadoFuncion;
    maximoResultado = Math.max(maximoResultado, resultadoFuncion);
    minimoResultado = Math.min(minimoResultado, resultadoFuncion);
}

const valorAproximado = sumaResultados * (limiteSuperior - limiteInferior) / cantidadSimulaciones;

console.log(`Resultado Matemático: ${calcularIntegralMatematica()}`);
console.log(`Resultado Aproximado de la Integral (Monte Carlo): ${valorAproximado}`);
console.log(`Porcentaje de Error: ${calcularError(valorAproximado)}%`);
console.log(`Valor Máximo: ${maximoResultado}`);
console.log(`Valor Mínimo: ${minimoResultado}`);

