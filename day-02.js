// тут мы узнали функции и что с ними можно делать
let exemple = 10
const inp1 = document.getElementById('input1')
const inp2 = document.getElementById('input2')
function exemple (input1, input2) {
    // в нее можно что то сложить чтобы она выполнялась каждый раз когда к ней обращаются
    // пишется название функции, затем в скобках пишутся параметры которые она будет использовать и в фигурных скобках то, что должно выполняться.
    const exInput1 = Number(input1.value)
    const exInput2 = Number(input2.value)
    // т.е. обьявляются 2 переменные exInput равные числовым значениям переменных input 1 и 2
    //Внутри можно описать условия IF\else, к примеру или что то еще. 
    If (input1<0){
        return exInput1 + exInput2
    } // т.е. если инпут 1 меньше нуля, то надо вернеуть сумму констант
    else if (input1>0) {
        return exInput1 - exInput2
        // иначе нужно вернуть разницу
    }
}
function printResult (result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}
// так же можно обратиться к элементам из hlml документа
const submitBtn = document.getElementById('submit') // например тут мы обьявляем константу submitBtn, чье значение равно элементу с ID submit из документа. (как определить из какого, если их несколько???)
// можно сделать функцию на условие или действие. Пока знаю только про действие, это .onclick
submitBtn.onclick = function () { // т.е. при клике на кнопку выполнить функцию, где обьявляется константа равная exemple с параметрами inp1 и 2
    const result = exemple (inp1, inp2) 
   // и как нибудь вывести
   printResult(result) 
   
}