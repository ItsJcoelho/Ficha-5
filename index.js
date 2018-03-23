//CLASS RETANGULO 
class Retangulo {
    constructor(largura = 1, altura = 1){
        this.largura = largura
        this.altura = altura
        this._cor = "branco"
    }
    get largura(){               // GETTER PARA A LARGURA 
        return this._largura
    }
    set largura(novaLargura){               // SETTER PARA A LARGURA
        this._largura = novaLargura
    }
    get altura(){                // GETTER PARA A ALTURA
        return this._altura
    }
    set altura(novaAltura){                // SETTER PARA A ALTURA
        this._altura = novaAltura
    }
    get cor(){                   // GETTER PARA A COR
        return this._cor
    }
    getArea(){                  // METODO PARA CALCULAR A AREA
        return this.altura*this.largura
    }
    getPerimetro(){             // METODO PARA CALCULAR A AREA
        return 2*this.altura +2*this.largura
    }
}
//Funçâo para escrever os resultados e onde é declarado o objeto
function FunctionA() {
    let objeto = new Retangulo(parseInt(prompt("Escreva a Altura")),parseInt(prompt("Escreva a Largura")))
    console.log(`A cor do Retangulo é ${objeto.cor}`)
    console.log(`Largura: ${objeto.largura}`)
    console.log(`Altura: ${objeto.altura}`)
    console.log(`Área: ${objeto.getArea()}`)
    console.log(`Perimetro: ${objeto.getPerimetro()}`)
}
class Circulo {
    constructor(raio = 2){
        this.raio = raio
    }
    get raio(){
        return this._raio
    }
    set raio(novoRaio){
        if(novoRaio>0){
            this._raio = novoRaio
        }
        else{
            console.log("Medida Ínvalida") 
        }
    }
    getArea(){
        return Math.PI*(this.raio*this.raio)
    }
    getCircunferencia(){
        return 2*Math.PI*this.raio
    }
}
function FunctionB() {
    let circulo = new Circulo()
    let respostaMudança = prompt(`O raio está definido como ${circulo.raio},pretende mudar?`)
    respostaMudança = respostaMudança.toUpperCase()
    if(respostaMudança == "SIM"){
        circulo.raio = parseInt(prompt("Escreva o novo Raio"))
    }
    else if(respostaMudança == "NAO"){
        console("Boa escolha")
    }
    else{
        console.log("Resposta Ínvalida")
    }
    console.log(`Raio: ${circulo.raio}`)
    console.log(`Área do circulo: ${circulo.getArea()}`)
    console.log(`Cincunferencia: ${circulo.getCircunferencia()}`)
}
class Ventoinha {
    constructor(){
        this.velocidade = "BAIXA"
        this.estado = false
    }
    get velocidade(){
        return this._velocidade
    }
    set velocidade(novaVelocidade){
        if(novaVelocidade == 1){
            this._velocidade = "BAIXA"
        }
        else if(novaVelocidade == 2){
            this._velocidade == "MÉDIA"
        }
        else if(novaVelocidade == 3){
            this(novaVelocidade == "ALTA")
        }
        else{
            console.log("Velocidade não existente")
        }
    }
    get estado(){
        return this._estado
    }
    set estado(novoEstado){
        if(this._estado == false&& novoEstado == "ligar"){
            this._estado = true
        }
        else if(this._estado == true && novoEstado == "desligar")
    }
    toString(){
        if(this.estado == false){
            console.log(`Neste momento a ventoinha encontra-se desligada`)
        }
        else{
            console.log(`Neste momento a ventoinha encontra-se ligada, velocidade atual: ${this.velocidade}`)
        }
    }
}
function FunctionC() {
    let ventoinha1 = new Ventoinha()
    let ventoinha2 = new Ventoinha()
    console.log("Primeira ventoinha:")
    console.log(`Velocidade: ${ventoinha1.velocidade}`)
    console.log(`Estado: ${ventoinha1.estado}`)

}