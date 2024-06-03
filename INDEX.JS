
function fazerPerguntas() {

    let respostas = [];
    
    let pergunta1 = prompt("Telefonou para a vítima? (S/N)").toUpperCase();
    let pergunta2 = prompt("Esteve no local do crime? (S/N)");
    let pergunta3 = prompt("Mora perto da vítima? (S/N)");
    let pergunta4 = prompt("Devia para a vítima? (S/N)");
    let pergunta5 = prompt("Já trabalhou com a vítima? (S/N)");
    
    respostas.push(pergunta1);
    respostas.push(pergunta2);
    respostas.push(pergunta3);
    respostas.push(pergunta4);
    respostas.push(pergunta5);
    
    let positivas = respostas.filter(resposta => resposta === 'S').length;

    if (positivas === 2) {
        console.log("Suspeita");
    } else if (positivas >= 3 && positivas <= 4) {
        console.log("Cúmplice");
    } else if (positivas === 5) {
        console.log("Assassino");
    } else {
        console.log("Inocente");
    }
}
fazerPerguntas();
