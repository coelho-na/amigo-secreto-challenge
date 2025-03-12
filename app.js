let amigos = []; 

let sorteados = [];  


const adicionarAmigo = () =>{
    const inputNames = document.getElementById("amigo"); 
    let nome = inputNames.value.trim();

    if(amigos.includes(nome)){
        alert("Este nome já foi adicionado! Favor insirir outro nome ou o nome e o sobrenome da pessoa."); 
        return; 
    }
    if(nome === "" ){
        alert("Por favor, insira um nome válido!") 
        return;     
    }

    amigos.push(nome); 
    inputNames.value = "";   
    inputNames.focus();  
    atualizarLista();

}   

//função para atualizar a lista de amigos

const atualizarLista = () =>{
    const listaAmigos = document.getElementById('listaAmigos'); 
    listaAmigos.innerHTML = ""; 
    console.log(amigos, listaAmigos)
    amigos.forEach((amigo, posicao) => { 
        const item = document.createElement('li');
        item.textContent = amigo + " ";
        console.log(amigo);
        // Criar botão de remover
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = "x";
        botaoRemover.classList.add("button-remove");
        botaoRemover.onclick = () => removerAmigo(posicao);

        // Adicionar o botão ao item da lista
        item.appendChild(botaoRemover);
        listaAmigos.appendChild(item);
    }); 
} 

// Função para remover um amigo da lista
const removerAmigo = (amigo) => {
    amigos.splice(amigo, 1); 
    atualizarLista(); // Atualiza a lista exibida
}


const sortearAmigo = () => {
    console.log(amigos)
    if(amigos.length === 0){
        alert("Adicione um amigo antes de sortear.");
        return; 
    } if(amigos.length < 3){
        alert("É necessário pelo menos 3 amigos para sortear."); 
        return; 
    }
     // Sorteia um amigo aleatoriamente
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]; 
    const resultado = document.getElementById('resultado'); 
    // Exibe o resultado do sorteio
    resultado.innerHTML =  `<li class="sorteado"> O amigo secreto sorteado é: ${amigoSorteado}!</li>`;


    let limparLista = document.getElementById('listaAmigos');
    limparLista.innerHTML = "";
    amigos = [];
}   