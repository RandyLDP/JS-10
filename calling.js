const isAdult = function(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const greet = function(age) {
    if (isAdult(age)) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
};

console.log(greet(125)); 
console.log(greet(8));

const vat = function (number1, number2){
 return number1 * number2 + number1;
};
const callVat = function(){
    let vatA = vat ();
}
console.log(vat(100, 0.21));
console.log(vat(1992, 0.09));

const iva = function(numb,numb2){
    console.log("price icl. Vat");
    return numb;
};
    
    const ivaB = function(numb , numb2) { 
        const ivaB = iva();
        console.log("VAT");
        iva();
     return numb - (numb / numb2) ;
    };
     
 

console.log(iva(100,0.21));
console.log(ivaB(100,1.21));
