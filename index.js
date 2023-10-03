class criarPersonagem {
    constructor(nome, idade, classe) {
        this.nome = nome
        this.idade = idade
        this.classe = classe  
    }

    atacar() {
        let ataque
        if (this.classe === "mago") {
            ataque = " magia"
        } else if (this.classe === "guerreiro") {
            ataque = " espada"
        } else if (this.classe === "monge") {
            ataque = " artes marciais"
        } else if (this.classe === "ninja") {
            ataque = " shuriken"
        }

        console.log(`${this.nome}, o ${this.classe}, atacou usando ${ataque}`)
    }
}

let personagem = new criarPersonagem("Hantaro", 24, "mago");
personagem.atacar()

personagem = new criarPersonagem("Athilio", 24, "guerreiro");
personagem.atacar()

personagem = new criarPersonagem("GeloDeFogo", 24, "monge");
personagem.atacar()

personagem = new criarPersonagem("Athiu", 24, "ninja");
personagem.atacar()