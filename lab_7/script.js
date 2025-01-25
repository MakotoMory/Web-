console.log("Любой текст")
var x, y;
x=2;
y=4;
console.log(x,y);
console.log(x+y);
var z;
z="Text";
console.log(z);
console.log(z.toUpperCase());
var v="БОЛЬШИЕ БУКВЫ"
console.log(v);
console.log(v.toLowerCase());
var q, w, e, r
q=3
w=6
e=10
r=3
console.log(x+y, x-y, x*y, y/x, x/y, w**e);
console.log(e%w, y%3, q%r)

function sumNumbers(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }

  function capitalizeWords(str) {
    return str
      .split(' ')  // Разделяем строку по пробелам
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Делаем первое слово с заглавной
      .join(' ');  // Объединяем обратно в строку
  }

console.log(sumNumbers([1, 2, 3, 4]))
console.log(capitalizeWords("hello world"))
