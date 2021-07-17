let form = document.getElementById('formulario');

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let fnome = document.getElementById('nome');
    let femail = document.getElementById('email');
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    let dados = {
        nome,
        email
    }; 

    let dadosConvertidos = JSON.stringify(dados);
    localStorage.setItem('lead', dadosConvertidos);
      
    msg.style.display = 'block';
});