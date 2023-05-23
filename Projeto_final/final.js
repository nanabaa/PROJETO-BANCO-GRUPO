class contaEmpresa{
    constructor(numero,cpf,saldo,ativo,emprestimo,nome){
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativo = ativo;
        this.emprestimo = emprestimo;
        this.nome = nome
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
    emprestimoEmpresa(valor){
        if(this.ativo){
            if(this.emprestimo<valor){
                console.log("Não foi possivel realizar o emprestimo. Valor máximo de emprestimo excedido.")
            }
            else if(valor<0){
                console.log("impossivel realizar. valor negativo.")
            }
            else if(valor==0){				
                console.log("Impossivel realizar, valor zerado...")				
                }	
            else{
                this.emprestimo-=valor
                this.saldo += valor
            }
        }
        else{
           console.log("conta inativa.") 
        }
    }
}
class contaEspecial{
    constructor(numero,cpf,saldo,ativo,limite,nome){
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativo = ativo;
        this.limite = limite;
        this.nome = nome
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


    debito(valor){
        if(this.ativo){
            if(valor>0 && valor<this.saldo){
                this.saldo -= valor
            }
            else if(valor>this.saldo){
                if(valor-this.saldo<this.limite){
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
class contaEstudantil{
    constructor(numero,cpf,saldo,ativa,Estudantil,nome){
    this.numero = numero;
    this.cpf = cpf;
    this.saldo = saldo;
    this.ativa = ativa;
    this.Estudantil = Estudantil;
    this.nome = nome
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
UsarEstudantil(valor){

    if(this.ativa){
    if(this.Estudantil<0){
        console.log("Impossivel Realizar o Emprestimo, seu valor é negativo...")
    }
    else if(this.Estudantil == 0){
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

for (let x=1; x<2; x++){
console.log("Bem Vindo ao banco GLS " + "O banco que te ajuda ") 
console.log("")
console.log("informe o seu tipo de conta para que possamos te ajudar") 
console.log("1-conta Poupança")
console.log("2-conta Corrente")
console.log("3-conta Especial")
console.log("4-conta Empresa")
console.log("5-conta estudantil")
console.log("6-sair")
tc = leia("qual o seu tipo de conta :")
}

if (tc==1){

}
else if(tc==2){

}
else if(tc==3){
    let numero = parseInt(leia("digite o numero da conta:"))
    let cpf = leia("digite o cpf da conta:")
    let c1 = new contaEspecial(numero,cpf,0,false,1000,"Conta Especial")
    let op=""
    let valor = 0
    let continuar = ""
c1.ativar()
for(let x=1; x<=10; x++){
    console.log("Banco GLS")
    console.log("")
    console.log("CONTA: " + c1.nome)
    console.log("Seu saldo é: "+c1.saldo)
    console.log("movimento: "+x)
    console.log("")
    op=leia("digite D para realizar debito ou C para credito: ")
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
    continuar=leia("continuar S/N ")
    if(continuar=="N" || continuar=="n"){
        console.log("obrigado por fazer operações conosco")
        x+= 10
    }
}
}
else if(tc==4){
    let numero = parseInt(leia("digite o numero da conta:"))
let cpf = leia("digite o cpf da conta:")
let valorEmprestimo = 10000
let c1 = new contaEmpresa (numero,cpf,0,false,valorEmprestimo,"Conta Empresa")
let op=""
let valor = 0
let continuar = ""
c1.ativar()
for(let x=1; x<=10; x++){
    console.log("Banco GLS")
    console.log("")
    console.log("CONTA: " + c1.nome)
    console.log("Seu saldo é: "+c1.saldo + "   valor restante para emprestimo: " +c1.emprestimo)
    console.log("movimento: "+x)
    console.log("")
    op=leia("digite D para debito, C para credito ou E para emprestimo: ")
    if(op=="D"){
        valor=parseInt (leia("digite o valor para debito: "))
        c1.debito(valor)
    }
    else if(op=="C"){
        valor=parseInt (leia("digite o valor para credito: "))
        c1.credito(valor)
    }
    else if(op=="E"){
        valor=parseInt(leia("digite o valor para emprestimo: "))
        c1.emprestimoEmpresa(valor)
    }
    continuar=leia("continuar S/N ")
    if(continuar=="N" || continuar=="n"){
        console.log("obrigado por fazer operações conosco")
        x+= 10
    }
}
}
else if(tc==5){
    let numero = parseInt(leia ("Digite o numero da Conta : "))
    let cpf = leia("Digite o cpf da conta : ")
    let Estudantil = 5000
    let c1 = new contaEstudantil(numero,cpf,0,false,Estudantil,"Conta Estudantil")
    let op=""
    let valor = 0
    let continuar =""
    c1.ativar()
    for(let x=1; x<=10; x++){
    console.log("Banco GLS")
    console.log("")
    console.log("CONTA: " + c1.nome)
    console.log("Seu saldo é: "+c1.saldo + "    valor restante para emprestimo: " + c1.Estudantil)
    console.log("movimento: "+x)
    console.log("")
    op = leia("Digite D - debito, C para Credito ou E para Estudantil: ")
    if(op=="D"){
        valor = parseInt(leia ("Digite o valor para debito : "))
        c1.Debito(valor)
    }
    else if(op=="C") {
        valor = parseInt(leia ("Digite o valor para Credito : "))
        c1.Credito(valor)
    }
    else if(op=="E") {
        valor = parseInt(leia ("Digite o valor para Emprestimo : "))
        c1.UsarEstudantil(valor)
        console.log("saldo restante do emprestimo: " + c1.Estudantil)
    }
    continuar=leia("continuar S/N ")
    if(continuar=="N" || continuar=="n"){
        console.log("obrigado por fazer operações conosco")
        x+= 10
    }
}


}
else if(tc==6){
    console.log("obrigado por acessar o banco-GLS")
}
else{
    console.log("o numero que digitou é invalido por favor tente novamente: ")
}