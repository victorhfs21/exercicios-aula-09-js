let i = 1;
while (i <= 10){
    document.querySelector("#contagem").innerHTML += i + "<br>";
    i++;
}

/*
No WHILE a condição fica no inicio do laço, isso quer dizer que o conteúdo do laço só será executado ENQUANTO a condição for verdadeira. Caso logo no inicio a condição seja falsa (i tenha o valor de 20 por exemplo) o laço não será executado nenhuma vez. o WHILE possui só uma parte:
while (condição)

o incremento do laço, diferente do laço for, deve ficar dentro do bloco while, no nosso exemplo é o i++
*/