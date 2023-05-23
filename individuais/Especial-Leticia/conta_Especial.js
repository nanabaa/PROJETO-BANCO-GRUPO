class contaEspecial{
    constructor(numero,cpf,saldo,ativo,limite){
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativo = ativo;
        this.limite = limite;
    }

    ativar(){
        this.ativo = true;
    }

    credito(valor){
        if(this.ativo){
            if(valor<0){
                console.log("impossivel realizar. valor negativo.")
            }
            else if(valor==0){				
                console.log("Impossivel realizar, valor zerado...")				
                }				
            else {				
            this.saldo += valor				
            }				
        }				
            else {				
            console.log("Conta inativa....")				
            }				
    }				


    debito(){
        if(this.ativo){
            if(valor>0 && valor<this.saldo){
                this.saldo -= valor
            }
            else if(valor>this.saldo){
                if(valor-this.saldo<limite){
                    this.limite = this.limite - valor;
                    this.limite = this.limite + this.saldo;
                    this.saldo= this.saldo - this.saldo;
                }
                else{
                    console.log("Impossivel realizar. Valor supera o valor do saldo e o limite.")
                }

            }
            else{
                console.log("impossivel realizar, valor invalido")
            }
        }
        else{
           console.log("conta inativa.") 
        }
    }
}

const leia = require("prompt-sync")()
let numero = parseInt(leia("digite o numero da conta:"))
let cpf = leia("digite o cpf da conta:")
let limite = 1000
let c1 = new contaEspecial(numero,cpf,0,false,limite)
let op=""
let valor = 0
c1.ativar()
for(let x=1; x<=10; x++){
    console.log("movimento: "+x)
    console.log("saldo atual conta: "+c1.saldo)
    op=leia("digite D para debito ou C para credito: ")
    if(op=="D"){
        valor=parseInt (leia("digite o valor para debito: "))
        c1.debito(valor)
        if (c1.saldo<=0){
            console.log("voce usou todo o saldo, o seu limite restante é : "+c1.limite)
        }
    }
    else if(op=="C"){
        valor=parseInt (leia("digite o valor para credito: "))
        c1.credito(valor)
    }
}

console.log("saldo final da conta: "+c1.saldo)