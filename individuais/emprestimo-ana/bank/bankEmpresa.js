class contaEmpresa{
    constructor(numero,cpf,saldo,ativo,emprestimo){
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativo = ativo;
        this.emprestimo = emprestimo
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

const leia = require("prompt-sync")()
let numero = parseInt(leia("digite o numero da conta:"))
let cpf = leia("digite o cpf da conta:")
let emprestimo = 10000
let c1 = new contaEmpresa (numero,cpf,0,false,emprestimo)
let op=""
let valor = 0
c1.ativar()
for(let x=1; x<=10; x++){
    console.log("movimento: "+x)
    console.log("saldo atual conta: "+c1.saldo)
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
        console.log("saldo restante do emprestimo: "+c1.emprestimo)
    }
}
console.log("saldo final da conta: "+c1.saldo)