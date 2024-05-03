function media() {
    //Variaveis local a função
    let nome = window.prompt('Qual é o nome do aluno?') ;
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`));
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`));
    med = (n1 + n2)/2 ;
    
    let msg; // cria uma variável e deixa ela vazia
    if (med >= 6) { // Se por acaso a média foi 6.0 ou mais...
        msg = 'Aprovado';
    } else { // senão...
        msg = 'Reprovado';
    }
    // O if é uma estrutura que cria uma CONDIÇÃO, que executa um bloco de comandos
    // ou outro, dependendo do resultado de um teste lógico.

    let res = document.getElementById('resultado');
    res.innerHTML = `<p>Calculando a média final de ${nome}.</p>`;
    res.innerHTML += `<p>As notas obtidas foram P1 = ${n1} e P2 = ${n2}</p>`;
    res.innerHTML += `<p>A média final será ${med}</p>`;
    res.innerHTML += `<p>Resultado: ${msg}</p>`;
}