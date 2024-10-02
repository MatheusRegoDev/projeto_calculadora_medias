const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando">';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste">';
const atividades = [];
const notas = [];
const spanAprovado = `<span class="aprovado">Aprovado</span>`;
const spanReprovado = `<span class="reprovado">Reprovado</span>`;
const notaDaMédia = parseFloat(prompt('Digite a média: '))

let linhas = '';
function atualizarMedia(){
    const mediaFinal = calcularMediaFinal();
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(1)
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaDaMédia ? spanAprovado : spanReprovado
}
function calcularMediaFinal(){
    let somaDasNotas = 0;
    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }
    return somaDasNotas / notas.length;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
    atualizarMedia();
    
});

function adicionarLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');
    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida!`)
    }
    else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';
        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizarTabela(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}