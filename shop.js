let totalBasket ={
    totalAmount: 0,    //Общее количество товаров в корзине
    totalSumm: 0,      //Общая стоимость товаров в корзине
}


const catalog = [
{
   id: 0,                //Код товара
   name: 'рубашка',      //Наименование
   description: 'белая', //Описание
   sizes: [41,42,43],    //массив возможных размеров
   price: 1500,          //цена товара
   available: true,      //Признак доступности для продажи
},
{
    id: 1,           
    name: 'джинсы',          
    description: 'синие',   
    sizes: [41,42,43],         
    price: 3500,         
    available: true,     
 },
 {
    id: 2,           
    name: 'поло',         
    description: 'красная',   
    sizes: ['M','XL','XXL'],         
    price: 1500,         
    available: true,     
 },
 {
    id: 3,            
    name: 'кроссовки',          
    description: 'белые',   
    sizes: [41,42,43],         
    price: 2500,         
    available: true,     
 },
 {
    id: 4,           
    name: 'майка',          
    description: 'с принтом',   
    sizes: ['M','XL','XXL'],         
    price: 1500,         
    available: true,     
 }
]

let basket =[
  {    
     good: 1,       //ссылка на товар в каталоге
     amount: 3,     //количество товара в корзине
  },
  {    
    good: 3,           
    amount: 5,         
  },
]

// функция добавления товара в корзину
function addGood(newGood,newAmount){
    basket[basket.length] = {
        good: newGood,
        amount: newAmount,
    }    
    console.log('1) товар добавлен')
    return basket
}

// функция удаления товара из корзины,аргумент - номер элемента в массиве
function delGood(idgood){
    basket.splice (idgood, 1)
    return console.log('2) товар удален')
}

// функция очистки корзины
function clearGood(){
    basket = []
    return basket
}

// функция вычисления общего количества и стоимости в корзине
function calcBasket(){
    let totalAmount = 0
    let totalSumm = 0
    for (let i=0;i<basket.length;i++){
        totalAmount = totalAmount + basket[i].amount
        totalSumm = totalSumm + basket[i].amount*catalog[basket[i].good].price
        // для отладки console.log(basket[i].good + ',' + basket[i].amount + ',' + catalog[basket[i].good].price)
    }
    totalBasket.totalAmount = totalAmount
    totalBasket.totalSumm = totalSumm
    return totalBasket
}

//добавление нового элемента
addGood(4,1)

//удаление элемента из корзины
delGood(0) 

//вычисление 
calcBasket()
console.log('3) Общее количество товаров=' + totalBasket.totalAmount + ', сумма=' + totalBasket.totalSumm)

console.log('4) состояние корзины до очистки:')
console.log(basket)
//очистка корзины
clearGood()
console.log('состояние корзины после очистки:')
console.log(basket)