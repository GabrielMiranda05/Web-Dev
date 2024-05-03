function estacao() { 
    let mes = prompt('Digite o mês em extenso (ex: Setembro)');
    let saida = document.querySelector('section#saida');
    let estacao;
    // O método toUpperCase() transforma todas as letras de uma string para maiúsculas
    switch (mes.toUpperCase()) { 
        // Podemos testar múltiplos casos em uma mesma linha, desse jeito
        case 'JANEIRO': case 'FEVEREIRO': case 'MARCO': 
            estacao = 'VERAO';
            break; // Nunca se esqueça do break!!!
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estacao = 'OUTONO';
            break;
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estacao = 'INVERNO';
            break;
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estacao = 'PRIMAVERA';
            break;
        default:
            estacao = 'INDEFINIDA';
            break;
    }
    saida.innerHTML = `<p>No mês de ${mes}, estamos na estação ${estacao}.</p>`;
}
