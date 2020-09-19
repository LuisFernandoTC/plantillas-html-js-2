function operacionesNaturales(opera) {
    var num1=parseInt(document.getElementById('n1').value),
        num2=parseInt(document.getElementById('n2').value),
        rpta=document.getElementById('resp');
        switch (opera) {
            case 'sumar':
                var suma=num1+num2;
                rpta.value=suma;
                break;
            case 'restar':
                var resta=num1-num2;
                rpta.value=resta;
                break;
            case 'multiplicar':
                var producto=num1*num2;
                rpta.value=producto;
                break;
            case 'dividir':
                var cociente=num1/num2;
                rpta.value=cociente;
                break;
        }     
}

var numeralCodes = [["","I","II","III","IV","V","VI","VII","VIII","IX"],         // Ones
                    ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   // Tens
                    ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]];        // Hundreds
function operacionesRomanos( oper ) {
    var roma1=document.getElementById('r1').value;
    var convertir = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000},
        natural = 0,
       i = roma1.length;
        while (i--) {
            if ( convertir[roma1[i]] < convertir[roma1[i+1]] )
                natural -= convertir[roma1[i]];
            else
                natural += convertir[roma1[i]];
        }
        var roma2=document.getElementById('r2').value;
        var convertir2 = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000},
            natural2 = 0.,
            i = roma2.length;
        while (i--) {
            if ( convertir2[roma2[i]] < convertir2[roma2[i+1]] )
                natural2 -= convertir2[roma2[i]];
            else
                natural2 += convertir2[roma2[i]];
        }
    var rspta=document.getElementById('respR');
    switch (oper) {
        case 'sumar':
            var suma=natural + natural2;
            console.log('ejecutando la suma ' + suma);
            var numeral = "";
            var digits = suma.toString().split('').reverse();
            console.log(digits)
            for (var i=0; i < digits.length; i++){
                numeral = numeralCodes[i][parseInt(digits[i])] + numeral;
            } 
            rspta.value= numeral;
            break;
        case 'restar':
            var operador=natural - natural2;
            console.log('ejecutando la resta' + operador)
            var numeral = "";
            var digits = operador.toString().split('').reverse();
            console.log(digits)
            for (var i=0; i < digits.length; i++){
                numeral = numeralCodes[i][parseInt(digits[i])] + numeral;
            } 
            rspta.value= numeral;
            break;
        case 'multiplicar':
            var operador=natural * natural2;
            console.log('ejecutando la multiplicacion ' + operador);
            var numeral = "";
            var digits = operador.toString().split('').reverse();
            console.log(digits)
            for (var i=0; i < digits.length; i++){
                numeral = numeralCodes[i][parseInt(digits[i])] + numeral;
            } 
            rspta.value= numeral;
            break;
        case 'dividir':
            var operador=Math.floor(natural / natural2);
            console.log('ejecutando la divicion ' + operador);
            var numeral = "";
            var digits = operador.toString().split('').reverse();
            console.log(digits)
            for (var i=0; i < digits.length; i++){
                numeral = numeralCodes[i][parseInt(digits[i])] + numeral;
            } 
            rspta.value= numeral;
            break;
    }
}
