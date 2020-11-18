let moduleCalculator = (function () {

    let total = 0

    function add(number) {
        validateNumber(number)
        total += number
    }

    function remove(number) {
        validateNumber(number)
        total -= number
    }

    function multiply(number) {
        validateNumber(number)
        total *= number
    }

    function divide(number) {
        validateNumber(number)
        total /= number
    }

    function getTotal() {
        return total
    }

    function validateNumber(Number) {
        if (typeof number !== 'number') {
            throw new Error('La valeur ' + number + 'nest pas un test')
        }
    }

    return {
        add: add,
        remove: remove,
        multiply: multiply,
        divide: divide,
        getResult: getTotal,
    }

})()

moduleCalculator.add(2)
moduleCalculator.add(3)
moduleCalculator.remove(10)
moduleCalculator.remove('test')

console.log(moduleCalculator.getResult())