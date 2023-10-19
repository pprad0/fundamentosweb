let nome = document.getElementById('nome')
let email = document.getElementById('email')
let assunto = document.querySelector('#assunto') // .assunto -> para classe

const olaMundo = () => {
    alert("Olá mundo!")
}

const validarForm = () =>{
    if(nome.value == "" || email.value == "" || assunto.value == ""){
        alert('Preencha todos os campos do formulário.')
    } else {
        alert('Dados enviados com sucesso!')
    }
}