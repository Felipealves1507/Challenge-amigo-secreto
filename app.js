//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }
    
    if (listaAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }
    
    listaAmigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    listaAmigos.forEach((nome, index) => {
        const li = document.createElement("li");
        li.textContent = nome;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 1) {
        alert("Adicione pelo menos 1 amigo para o sorteio!");
        return;
    }
    
    let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    
    exibirResultado(sorteado);
}

function exibirResultado(sorteado) {
    const ul = document.getElementById("resultado");
    ul.innerHTML = "";
    
    const li = document.createElement("li");
    li.textContent = `O amigo secreto sorteado é: ${sorteado}`;
    ul.appendChild(li);
}
