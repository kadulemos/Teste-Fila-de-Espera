// Criação de campo de busca para os nomes dos pacientes
var campoFiltro = document.querySelector("#filtrar-tabela"); // #filtrar-tabela do HTML

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector('.info-nome'); // busca a classe .info-nome do paciente
            var nome = tdNome.textContent; // conteúdo dentro da classe
            var expressao = new RegExp(this.value, 'i'); // expressões regulares -> busca por pedaços de uma palavra
            
            if(expressao.test(nome)) { // condição para desaparecer ou surgir os pacientes de acordo com o filtro
                paciente.classList.remove("invisivel");    
            } else {
                paciente.classList.add('invisivel');
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});