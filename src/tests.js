const { fibonacciLoop, fibonacciRecusrivo, fibonacciMemo } = require('./fibo');
const { cpu } = require('./cpu');

let n = 11;

const test = async () => {
  // Dados da CPU
  const dado = await cpu();
  console.log(dado);

  console.log(`======================`);
  console.log(`\nN = ${n}`);
  // Teste usando a função com while
  console.time('while loop');
  console.log(fibonacciLoop(n));
  console.timeEnd('while loop');

  // Teste usando recursão
  console.time('recursiva');
  console.log(fibonacciRecusrivo(n));
  console.timeEnd('recursiva');

  // Teste usando memoização
  console.time('memo');
  console.log(fibonacciMemo(n));
  console.timeEnd('memo');

  console.log(`\n======================\n`);
  n = 40;
  console.log(`N = ${n}`);

  // Teste usando a função com while
  console.time('while loop');
  console.log(fibonacciLoop(n));
  console.timeEnd('while loop');

  // Teste usando recursão
  console.time('recursiva');
  console.log(fibonacciRecusrivo(n));
  console.timeEnd('recursiva');

  // Teste usando memoização
  console.time('memo');
  console.log(fibonacciMemo(n));
  console.timeEnd('memo');
};

test();
