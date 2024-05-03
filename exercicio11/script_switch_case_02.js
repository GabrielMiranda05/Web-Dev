function calculadora() {
    let n1 = Number(prompt('Primeiro valor:'));
    let n2 = Number(prompt('Segundo valor:'));
    let op = prompt(`Valores informados: ${n1} e ${n2}. \nO que vamos fazer? \n[+] Somar \n[-] Subtrair \n[*] Multiplicar \n[/] Dividir`);

    let saida = document.getElementById('saida');
    saida.innerHTML = `<h2>Calculando...</h2>`;
    switch (op) { // A estrutura switch basicamente permite você testar valores dentro de uma variável ou expressão. Ela é compatível apenas com números inteiros e strings
        case '+':
            saida.innerHTML += `<p>${n1} + ${n2} = ${n1+n2}</p>`;
            break; // O break é obrigatório em cada case. Se não for colocado, acontecerá a execução de vários comandos indesejados de outros cases
        case '-':
            saida.innerHTML += `<p>${n1} - ${n2} = ${n1-n2}</p>`;
            break;
        case '*':
            saida.innerHTML += `<p>${n1} x ${n2} = ${n1*n2}</p>`;
            break;
        case '/':
            saida.innerHTML += `<p>${n1} / ${n2} = ${n1/n2}</p>` ;
            break;
        default: // Se o usuário não digitar nenhum dos valores acima, vai cair aqui
            saida.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles. </p>`;
            break;
    }
}