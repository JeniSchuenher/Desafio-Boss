console.log ("Jeniffer")

let nickname = "Artemis"
let armas = "Arco e Flecha"
let especial = "Invocar ajuda de animais"
let xp = 4500

function classificarXP(xp) {
    let classificacao;

// if (experiencia > ) else if ()  Else
if (xp < 1000) {
    classificacao = "Ferro";
} else if ( xp >= 1001 && xp <= 2000 ){
    classificacao = "Bronze";
} else if (xp >=2001 && xp <=5000){
    classificacao = "Prata";
} else if (xp >=5001 && xp <=7000){
    classificacao = "Ouro";
} else if (xp >=7001 && xp <=8000){
    classificacao = "Platina";
} else if (xp >=8001 && xp <=9000){
    classificacao = "Ascendente";
} else if (xp >= 9001 && xp <= 10000){
    classificacao = "Imortal";
} else {
    classificacao = "Radiante";
}
return classificacao;
};
const xpUsuario = 4500; 
let nivel = classificarXP(xpUsuario)


console.log("Nickname: " + nickname + ";" +
    "Nivel: " + nivel + ";" +
    "Armas: " + armas + ";" +
    "Poder Especial: " + especial + "."

 );
 

