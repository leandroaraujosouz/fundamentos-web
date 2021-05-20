let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let statusNome = false;
let statusEmail = false;
let statusAssunto = false;

nome.style.width = "100%";
email.style.width = "100%";

function validaNome()
{
    let txtNome = document.querySelector("#txtNome");
    if(nome.value.length < 3)
    {
        txtNome.innerHTML = "Nome Invalido";
        txtNome.style.color = "red";
        statusNome = false;
    }
    else
    {
        txtNome.innerHTML = "Nome Valido";
        txtNome.style.color = "green";
        statusNome = true;
    }
    
}

function validaEmail()
{
    let txtEmail = document.querySelector("#txtEmail");
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1)
    {
        txtEmail.innerHTML = "Email Invalido";
        txtEmail.style.color = "red";
        statusEmail = false;
    }
    else
    {
        txtEmail.innerHTML = "Nome Valido";
        txtEmail.style.color = "green";
        statusEmail = true;
    }
    
}

function validaAssunto()
{
    let txtAssunto = document.querySelector("#txtAssunto");
    if(assunto.value.length > 100)
    {
        txtAssunto.style.visibility = "visible";
        txtAssunto.innerHTML = "Texto muito grande";
        txtAssunto.style.color = "red";
        statusAssunto = false;
        
    }
    else
    {
        txtAssunto.style.visibility = "hidden"
        statusAssunto = true;
    }
}

function envio()
{
    if(statusAssunto == false || statusEmail == false || statusNome == false)
    {
        alert("Dados invalidos, valide as informações antes de enviar!");
    }
    else
    {
        alert("Dados enviados com sucesso!");
    }
}

function imagemZoom(imagem)
{
    imagem.style.width = "400px";
    imagem.style.height ="400px";
    document.body.style.backgroundImage = "url('assets/img/imagem2.gif')";
}

function imagemNormal(imagem)
{
    imagem.style.width = "200px";
    imagem.style.height ="200px";
    document.body.style.backgroundImage = "none";
}

function tocar()
{
    document.querySelector("#musica").play();
}