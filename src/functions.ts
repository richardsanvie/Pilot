function calculaArea(base:number,altura:number):number{
    return base*altura;
}

const calculaArea2=(base:number,altura:number):number  => base*altura

function somar(...numeros:number[]):void{
    console.log(numeros)
}

function teste(): string| number{
    if(10>5){
        return 'dez maior que cicno'

    }else{
        return('nono')
    }
}

const resultadoDeTeste= teste() //retorna string ou number