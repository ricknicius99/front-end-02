function modoNoturno(){
    let bodyReference = document.querySelector('body')
    bodyReference.classList.toggle('dark')
    if(bodyReference.classList.contains('dark')){
        document.querySelector('#botao').innerHTML = '☀️'
    }
    else{
        document.getElementById('botao').innerHTML = '🌑'        
    }
};


const postagens = [{
    nome: 'Gato Domestico',
    descricao: 'Os gatos domésticos são animais pertencentes à Família Felidae, e Gênero Felis. Alguns autores os consideram como uma subespécie do gato silvestre, o Felis silvestris, restrito à África, Ásia e Europa. Outros afirmam que ambas são espécies distintas. Assim, os gatos domésticos podem ser atendidos pelos nomes científicos Felis silvestris catus ou, simplesmente, Felis catus.',
    imagem: './imagens/gatonormal.jpg'
},
{
    nome: 'Lobo Cinza',
    descricao: 'O lobo é uma espécie de mamífero canídeo do gênero Canis. É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás. É o maior membro remanescente selvagem da família canidae.',
    imagem: './imagens/lobo.jpg'},
{
    nome: 'Lobo Cinza',
    descricao: 'O lobo é uma espécie de mamífero canídeo do gênero Canis. É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás. É o maior membro remanescente selvagem da família canidae.',
    imagem: './imagens/lobo.jpg'},
{
    nome: 'Lobo Cinza',
    descricao: 'O lobo é uma espécie de mamífero canídeo do gênero Canis. É um sobrevivente da Era do Gelo, originário do Pleistoceno Superior, cerca de 300 mil anos atrás. É o maior membro remanescente selvagem da família canidae.',
    imagem: './imagens/lobo.jpg'}
];

let postagensReference = document.querySelector('.container')

for( let posts of postagens){
    postagensReference.innerHTML += `
    <div class="item">
    <img src="${posts.imagem}">
    <h2>${posts.nome}</h2>
    <p>${posts.descricao}</p>
    </div>`
};