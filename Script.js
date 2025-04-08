rodada = 1
while(rodada <= 3) {
    console.log("Rodada: "+ rodada)
    

    EscolhaJogador = prompt("Nivel "+rodada+", vidro (1, 2 ou 3)?")
    PisoQuebrado = Math.floor(Math.random()*3) + 1;

    if(EscolhaJogador == PisoQuebrado) {
        alert("Vidro Quebrou! Voce perdeu!!")
        rodada = 1000;
    }
    else {
        alert("Passou! Piso quebrado estava no numero: "+PisoQuebrado)
    }
    rodada = radada + 1
    if(rodada == 4){
        alert("Voce venceeeeu!!!")
        break
    }
}