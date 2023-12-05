
function somaDivisiveis(numero) {
    let somatorio = 0;
    for (let i = 1; i < numero; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        somatorio += i;
      }
    }
    return somatorio;
  }
  
  // Testes
  console.log(somaDivisiveis(10)); // Deve imprimir 23
  console.log(somaDivisiveis(11)); // Deve imprimir 33