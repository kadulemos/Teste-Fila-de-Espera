// > Tentativa de ordenação dos registros
var botaoOrdenar = document.querySelector('.ordenar-pacientes');

botaoOrdenar.addEventListener('click', function() {

    var ordena = document.querySelector('.tabela-pacientes');
    ordena.sort();
    document.getElementsByClassName("info-nome").innerHTML = ordena;
})