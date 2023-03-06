let mas = []
//функция 1 распознавания простого числа
function isPrime(num) {
    if (num == 2 || num == 3)
      return true;
    if (num <= 1 || num % 2 == 0 || num % 3 == 0)
      return false;  
    for (let i = 5; i * i <= num ; i+=6)
      if (num % i == 0 || num % (i + 2) == 0)
        return false;
    return true;
  }
//функция 2 выдающая нужное количество простых чисел
function simpleMas(col){
    let i = 0
    let j = 0
    while(j < col) {
        if (isPrime(i) == true)
        { 
           mas[j]=i
           j=j+1
        } 
        i=i+1
    }
    return mas
}

//отсчет времени для simpleMas
console.time('simpleMas')

//ввод количества простых чисел через аргумент argv[2] в консоли: node simple.js argv[2]
//вызов фунции 2
simpleMas(process.argv[2])

//остановка времени для simpleMas
console.timeEnd('simpleMas') 

//проверка массива простых чисел
for (let ii=0;ii < mas.length; ii++) {
     console.log(mas[ii])
}
