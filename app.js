const buttonMain = document.getElementById("button");


buttonMain.addEventListener("click", function()
{
    window.location.href = "http://127.0.0.1:5500/index.html"; //Obtiene el id del botón
})


const buttonBack = document.getElementsByClassName("container-button")[0];


buttonBack.addEventListener("click", function()
{
    window.location.href = "http://127.0.0.1:5500/main.html"; //Obtiene el id del botón
})
