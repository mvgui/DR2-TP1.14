let massa = Number(prompt("Digite o valor da massa (Kg): "));
let aceleracao = Number(prompt("Digite o valor da aceleração (m/s²): "));
let forca = massa * aceleracao;
let trabalho = Number(prompt("Digite o trabalho realizado (J):"));
let tempo = Number(prompt("Digite o tempo (s):"));
let potencia = trabalho / tempo;
alert(
  "O resultado da força é: " +
    forca +
    "N" +
    "\nO resultado da potência é " +
    potencia +
    "W"
);
