let total = quantidadeDeVitoriasEDerrotas (102, 2)

function quantidadeDeVitoriasEDerrotas(vitorias, derrotas){
//Não entendo muito bem para que a estrutura de repetição então,
//farei um contador de vitorias e derrotas.
   
   let ctvitoria = 0
   let ctderrota = 0

        for (let ctvit = 0; ctvit < vitorias; ctvit++){
            ctvitoria++
        }
        for (let ctder = 0; ctder < derrotas; ctder++){
            ctderrota++
        }

        let saldoVitoria = ctvitoria - ctderrota;
        let nivelDoHeroi= "null";

        if (saldoVitoria <= 10) {
            nivelDoHeroi = "Ferro"
        } else if (saldoVitoria >= 11 && saldoVitoria <= 20){
            nivelDoHeroi = "Bronze"
        } else if (saldoVitoria >= 21 && saldoVitoria <= 50){
            nivelDoHeroi = "Prata"
        } else if (saldoVitoria >= 51 && saldoVitoria <= 80){
            nivelDoHeroi = "Ouro"
        } else if (saldoVitoria >= 81 && saldoVitoria <= 90){
            nivelDoHeroi = "Diamante"          
        } else if (saldoVitoria >= 91 && saldoVitoria <= 100){
            nivelDoHeroi = "Lendário"
        } else {
            nivelDoHeroi = "Imortal"
        }
        return [saldoVitoria, nivelDoHeroi] 
}

console.log (`O Herói tem de saldo de ${total[0]} está no nível de ${total[1]}.`)
