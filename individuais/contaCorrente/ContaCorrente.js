//Classes
class contaCorrente{
    constructor(numero,cpf,saldo,ativa){
    this.numero = numero;
    this.cpf = cpf;
    this.saldo = saldo;
    this.ativa = ativa
}

//Ativar a conta
ativar(){
    this.ativa = true;
}


//Adicionar Credito
Credito(valor){
    if(this.ativa){
       if(valor<0){
        console.log("Impossivel Realizar, valor negativo...")
       }
       else if(valor == 0){
        console.log("Saldo zerado...")
    }
    else {
        this.saldo += valor
    }
    }
    else{
        console.log("Conta Inativa...")
    }
}


//Debitar da Conta
Debito(valor){
    if(this.ativa){
    if(valor<0){
        console.log("Impossivel Realizar, valor negativo...")
    }
    else if(valor == 0){
        console.log("Saldo zerado...")
    }
    else if(valor > this.saldo){
        console.log("Impossivel realizar, Saldo Indisponivel...")
    }
    else {
        this.saldo -= valor
    }
}
else{
    console.log("Conta Inativa...")
}
}
pedirTalao(NCH){
    if(this.ativa){
        this.saldo+=(30*NCH)

}
else{
    console.log("Conta Inativa...")
}
}
}



const leia = require("prompt-sync")()
let numero = parseInt(leia ("Digite o numero da Conta : "))
let cpf = leia("Digite o cpf da conta : ")
let C1 = new contaCorrente(numero,cpf,0,false)
let op=""
let NCH = ""
let nCheque = 0
let valor = 0
let continuar = ""
C1.ativar()
for(let x=1; x<=10; x++){
    op = leia("Digite D - debito, C para Credito: ")
    if(op=="D"){
        valor = parseInt(leia ("Digite o valor para debito : "))
        C1.Debito(valor)
        continuar=leia("continuar S/N : ")
        if(continuar=="N" || continuar=="n"){
            console.log("obrigado por fazer operações conosco")
            x+= 10
        }
    }
    else if(op=="C") {
        valor = parseInt(leia ("Digite o valor para Credito : "))
        C1.Credito(valor)
        continuar=leia("continuar S/N : ")
    if(continuar=="N" || continuar=="n"){
        console.log("obrigado por fazer operações conosco")
        x+= 10
    }
    }
    }

console.log("Saldo atual conta : " + C1.saldo)
continuar=leia("gostaria de sacar um cheque? S/N : ")
if (continuar=="S" || continuar =="s"){
    NCH=leia("quantos cheques voce vai querer? : ")
    if(NCH<=3){
        C1.pedirTalao(NCH)
    }
    else{
        console.log("numero invalido")
    }
}

console.log("Saldo final da conta :" + C1.saldo)