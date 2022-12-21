function suma(text){
    let numeros;
    let delimitador;
    if(text.length===0){return 0}
    if(text[0]=='/' && text[1]=='/'){
        let format = text.split('\n')
        let delimitadorUser = format[0];
        numeros = format[1]
        

        delimitador = new RegExp(`[${delimitadorUser[2]}]+`)
        /* for (let j=2; j < delimitadorUser.length; j++){
                delimitador = delimitador + delimitadorUser[j];
        } */
        //delimitador = delimitador + "]+/";
    }else{
        delimitador = /[\s,n]+/
        numeros = text;
    }
    
    let numbersArray = numeros.split(delimitador)
    
    let total = numbersArray.reduce((a,b) => { 
        if (parseInt(b) < 0) throw new Error("No poden haver-hi numeros negatius"); 
        if (parseInt(b) > 1000) b=0
        return a + parseInt(b)
    }, 0);
    
    return  total
}



console.log(suma('// \n1 2'))


module.exports = {suma}