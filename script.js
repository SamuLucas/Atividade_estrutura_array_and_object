// atividade 1

let dados = {
    name: 'Samuel',
    age: 25,
    peso: 95
}
dados.filme = 'Spider-man';
delete dados.peso;
console.log(dados);

// atividade 2


let cadastro = ['meus_dados', 'dados_amigo_1', 'dados_amigo_2', 'dados_amigo_3', 'dados_amigo_4']

cadastro.meus_dados = {

    nome: 'samuel',
    idade: 25,
    telefone: 11999222668,
    amigos: ['guilherme', 'igor', 'joão', 'julia'],



}
console.log(cadastro.meus_dados.nome);

cadastro.dados_amigo_1 = {

    nome: 'guilherme',
    idade: 24,
    telefone: 11992558460,
    amigos: ['samuel', 'igor', 'joão', 'julia']
}
console.log(cadastro.dados_amigo_1.nome)


cadastro.dados_amigo_2 = {

    nome: 'igor',
    idade: 18,
    telefone: 11965834922,
    amigos: ['guilherme', 'samuel', 'joão', 'julia']
}
console.log(cadastro.dados_amigo_2.nome);

cadastro.dados_amigo_3 = {

    nome: 'joão',
    idade: 30,
    telefone: 11940384428,
    amigos: ['guilherme', 'igor', 'samuel', 'julia']
}
console.log(cadastro.dados_amigo_3.nome);

cadastro.dados_amigo_4 = {

    nome: 'julia',
    idade: 20,
    telefone: 11972167741,
    amigos: ['guilherme', 'igor', 'joão', 'samuel']
}
console.log(cadastro.dados_amigo_4.nome);

console.log(cadastro);