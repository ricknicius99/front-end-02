import { somar } from './somar.js';
import { subtracao } from './subtracao.js';
import { multiplicacao } from './multiplicacao.js';
import { divisao } from './divisao.js';

var c = prompt('Para SOMAR escolha: + , para SUBTRAIR escolha: - , para MULTIPLICAR escolha: * , para DIVIDIR escolha: / .');
var a = parseInt(prompt('Digite um numero'));
var b = parseInt(prompt('Digite um numero'));

if(c == '+'){
    console.log('O resultado de' + ' ' + a + c + b + ' =' + ' ' + somar(a,b))
}
else if(c == '-'){
    console.log('O resultado de' + ' ' + a + c + b + ' =' + ' ' + subtracao(a,b))
}
else if(c == '*'){
    console.log('O resultado de' + ' ' + a + c + b + ' =' + ' ' + multiplicacao(a,b))
}
else if(c == '/'){
    console.log('O resultado de' + ' ' + a + c + b + ' =' + ' ' + divisao(a,b))
}
else{
    console.log('operação invalida')
 };

