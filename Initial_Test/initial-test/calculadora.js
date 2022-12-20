function suma(text){
    
    let numberTemp = [];
    let numbersArray = [];

    for(let i=0; i<text.length; i++){
        if(!isNaN(text[i])) {
            numberTemp.push(parseInt(text[i]))
        }
    }

    let total = numbersArray.reduce((a,b) => a + b, 0);   
    
    return  total
}



console.log(suma('123'))


module.exports = {suma}