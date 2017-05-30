import {Calculator} from './calculator'
var calculator = new Calculator();
module.exports = {
    calculate(a, b, op) {
        var result = '';
        switch (op) {
            case '+':
                result = calculator.add(a, b);
                break;
            case '-':
                result = calculator.sub(a, b);
                break;
            case '/':
                result = calculator.div(a, b);
                break;
            case '*':
                result = calculator.mul(a, b);
                break;
            default:
                console.log('Sorry, Invalid Operator! ' + op + '.');
        }
        return result;
    }
}
