class contaPoupanca{
    constructor(numero,cpf,aniversario,diaAtual,saldo,ativo){
        this.numero = numero;
        this.cpf = cpf;
        this.aniversario = aniversario;
        this.diaAtual = diaAtual;
        this.saldo = saldo;
        this.ativo = ativo
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
            if(valor<0){
                console.log("Impossivel realizar. Valor negativo.")
            }
            else if(valor==0){
                console.log("Impossivel realizar. Valor zerado.")
            }
            else if(valor>this.saldo){
                console.log("Impossivel realizar. Valor indisponível.")
            }
            else{
                this.saldo -= valor
            }
        }
        else{
           console.log("conta inativa.") 
        }
    }

    diaAniversarioPoupanca(nBonus){
        if(this.ativo){
            if(this.aniversario===this.diaAtual && nBonus===0){
                this.saldo =  this.saldo+(0.05*this.saldo)
                nBonus+=1
            }
            else{
                console.log("Nenhum bonus disponível.")
            }
        }
        else{
            console.log("conta inativa.") 
         }
    }	
}

const leia = require("prompt-sync")()
let numero = parseInt(leia("digite o numero da conta: "))
let cpf = parseInt (leia("digite o cpf da conta: "))
let aniversario = ""
aniversario = (leia("insira sua data de aniversario: "))
let diaAtual = ""
let nBonus = 0
let c1 = new contaPoupanca(numero,cpf,aniversario,diaAtual,0,false)
let op=""
let valor = 0
c1.ativar()
for(let x=1; x<=10; x++){
    console.log("movimento: "+x)
    console.log("saldo atual conta: "+c1.saldo)
    diaAtual = (leia("insira a data atual: "))
    op=leia("digite D para debito, C para credito: ")
    if(op=="D"){
        valor=parseInt (leia("digite o valor para debito: "))
        c1.debito(valor)
    }
    else if(op=="C"){
        valor=parseInt (leia("digite o valor para credito: "))
        c1.credito(valor)
    }

    if(c1.saldo>0){
    c1.diaAniversarioPoupanca(nBonus)
    }
}
console.log("saldo final da conta: "+c1.saldo)