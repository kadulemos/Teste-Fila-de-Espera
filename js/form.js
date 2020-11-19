// * Criando função que adiciona outros pacientes no formulário

// Adicionando função ao clique do botão
var botaoAdicionar = document.querySelector('#adicionar-paciente'); // variável para chamar um objeto do mundo HTML através do document.querySelector
botaoAdicionar.addEventListener('click', function (event) { // função que tira o padrão que é recarregar a página
    event.preventDefault();

    var form = document.querySelector('#form-adiciona'); // tendo acesso do formulário presente no HTML

    // > chamando a função com os dados do paciente do formulário
    var paciente = obtemPacienteDoFormulario(form); // esse objeto paciente obtém as propriedades do paciente do formulário

    // > verificando a função de validação do paciente e mostrando no console se houver erro
    var erros = validaPaciente(paciente);

    if(erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);
    
    form.reset(); // limpa os campos do formulário após adicionar os dados de um paciente

    var mensagensErro = document.querySelector('#mensagens-erro');
    mensagensErro.innerHTML = '';

});

function obtemPacienteDoFormulario(form) {
    
    // criando um objeto -> utilizando as chaves {}
    // criação dos objetos que buscam o valor dos inputs (através do 'name') no formulário HTML
    var paciente = {
        nome: form.nome.value,
        nascimento: form.nascimento.value,
        cpf: form.cpf.value,
        atendimento: form.atendimento.value,
        chegada: form.chegada.value,
    }

    return paciente;

}

function montaTr(paciente) {

    // função para criar um elemento através do JavaScript para o mundo HTML
    var pacienteTr = document.createElement('tr'); // passando o nome da tag que se quer criar no HTML -> <tr></tr>
    pacienteTr.classList.add('paciente'); // adicionado a classe 'paciente' à <tr> criada

    // appendChild -> coloca os elementos como filho de outro no mundo HTML
    // adicionando a função montaTd() dentro do appendChild, para diminuir o número de código (não precisando cria uma variável)
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.nascimento, 'info-nascimento'));
    pacienteTr.appendChild(montaTd(paciente.cpf, 'info-cpf'));
    pacienteTr.appendChild(montaTd(paciente.atendimento, 'info-atendimento'));
    pacienteTr.appendChild(montaTd(paciente.chegada, 'info-chegada'));

    // > Tentativa de inserir o link para chamar o paciente em cada novo registro
    //pacienteTr.appendChild(montaTd(paciente.chamar, 'info-chamar').append(document.write(("<a>").addClass("botao-chamar").attr("href", "#").value(Chamar))));

    return pacienteTr;

}

// função de criação dos <td> para adicionar a classe
function montaTd(dado, classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

// função que verifica o paciente e se há alguma informação divergente
function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push('O campo nome não está preenchido');
    }

    if (paciente.nascimento.length == 0) {
        erros.push('O campo nascimento não está preenchido');
    }
    if (paciente.chegada.length == 0) {
        erros.push('O campo data de chegada não está preenchido');
    }

    return erros;
}

function exibeMensagensDeErro (erros) {
    var ul = document.querySelector('#mensagens-erro');

    // limpando as mensagens de erro ao inserir novas informações no formulárrio
    ul.innerHTML = '';

    // 'for' para cada objeto dentro da função erro criada
    erros.forEach(function(erro) {
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}

// função que cria TR e a coloca dentro do FORM
function adicionaPacienteNaTabela(paciente) {
    // monta <tr> e <td>
    var pacienteTr = montaTr(paciente);
    // adicionando pacienteTr à '#tabela-pacientes'
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
}