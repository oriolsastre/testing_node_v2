function lletraDNI(dni){
    if(dni.toString().length !== 8 || isNaN(dni)){throw new Error("El DNI han de ser només 8 números. Si necessita 0 inicials, posa'ls")}
    
    const mod2char = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']
    return mod2char[parseInt(dni)%23]
}

module.exports = {lletraDNI}