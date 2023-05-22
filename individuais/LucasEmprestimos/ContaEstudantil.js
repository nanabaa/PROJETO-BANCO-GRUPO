//Classes
class contaEstudantil{
    constructor(numero,cpf,saldo,ativa,Estudantil){
    this.numero = numero;
    this.cpf = cpf;
    this.saldo = saldo;
    this.ativa = ativa;
    this.Estudantil = Estudantil;
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
        this.saldo -= valor
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
UsarEstudantil(valor){

    if(this.ativa){
    if(Estudantil<0){
        console.log("Impossivel Realizar o Emprestimo, seu valor é negativo...")
    }
    else if(Estudantil == 0){
        console.log("Seu Emprestimo está zerado...")
    }
    else {
        this.Estudantil -= valor
        this.saldo += valor
    }
}
else{
    console.log("Conta Inativa...")
}
}
}



const leia = require("prompt-sync")()
let numero = parseInt(leia ("Digite o numero da Conta : "))
let cpf = leia("Digite o cpf da conta : ")
let Estudantil = 5000
let C1 = new contaEstudantil(numero,cpf,0,false,Estudantil)
let op=""

let valor = 0
C1.ativar()
for(let x=1; x<=10; x++){
    op = leia("Digite D - debito, C para Credito ou E para Estudantil: ")
    if(op=="D"){
        valor = parseInt(leia ("Digite o valor para debito : "))
        C1.Debito(valor)
    }
    else if(op=="C") {
        valor = parseInt(leia ("Digite o valor para Credito : "))
        C1.Credito(valor)
    }
    else if(op=="E") {
        valor = parseInt(leia ("Digite o valor para Emprestimo : "))
        C1.UsarEstudantil(valor)
        console.log("saldo restante do emprestimo: " + C1.Estudantil)
    }
    console.log("Saldo atual conta : " + C1.saldo)

}

console.log("Saldo final da conta :" + C1.saldo)