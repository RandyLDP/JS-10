const age = function (old){
    console.log("Hello there");
if (old >= 18){
    return true;
}
    
  else{
      console.log("Hey kiddo");
    return false;
}
};

const callAge = function(callsAge){
    const ages = age (18);
};

console.log(callAge());

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