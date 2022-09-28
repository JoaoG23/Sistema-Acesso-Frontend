function mascararSigiloso( dado ) {
    let tamanho = dado.length;

    const tresPrimeiros = dado.substring( 0,3 );
    const  tresUltimos = dados.substring(tamanho -3 , tamanho)

    let dadosMascarado = tresPrimeiros + '*******' + tresUltimos;
    return dadosMascarado;
    
}