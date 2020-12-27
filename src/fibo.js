/*

Trabalho de Matemática Discreta Fibonacci Grupo A

148843 - Mateus Henrique da Silva Pires
174601 - Jorge Luiz Vergilio Da Silva
257182 - Heitor Lopes Matheus
92909 - Rodrigo Fortunato de Lima


*/

const fibonacciLoop = (num) => {
  let a = 1;
  let b = 0;
  let temp;

  while (num >= 0) {
    temp = a;
    a += b;
    b = temp;
    num -= 1;
  }

  return b;
};

const fibonacciRecusrivo = (num) => {
  if (num <= 1) return 1;

  // F(n) = F(n-1) + F(n-2)
  return fibonacciRecusrivo(num - 1) + fibonacciRecusrivo(num - 2);
};

const fibonacciMemo = (num, memo) => {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return (memo[num] =
    fibonacciMemo(num - 1, memo) + fibonacciMemo(num - 2, memo));
};

module.exports = { fibonacciLoop, fibonacciRecusrivo, fibonacciMemo };
