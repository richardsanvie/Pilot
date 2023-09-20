type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}

const alunos: aluno[] = [
    {
        nome: "Carlos",
        cursos: ["Front-end", "UX/UI"],
        idade: 27

    },

    {
        nome: "ye",
        cursos: ["back-end", "UX/UI"],
        idade: 21

    }

]

alunos.push({
    nome: "Julia",
    cursos: ["Front-end, UX/UI"],
    idade: 28
})

const novoAluno: aluno = {
    nome: "Jonas",
    idade: 25
}

function exibeAluno(aluno: aluno){
    console.log(aluno.nome)
}