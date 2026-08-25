function entrarNaHistoria() {

    const musica = document.getElementById("musica");

    musica.play();

    document.getElementById("historia").scrollIntoView({
        behavior: "smooth"
    });

}

function proximaParte() {

    document.getElementById("parte2").scrollIntoView({
        behavior: "smooth"
    });

}

function atualizarContador() {

    const inicio = new Date(2026, 5, 10);
    const hoje = new Date();

    inicio.setHours(0, 0, 0, 0);
    hoje.setHours(0, 0, 0, 0);

    const diferenca = hoje - inicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    document.getElementById("dias").textContent = dias;
}

atualizarContador();

function abrirCarta() {

    document.getElementById("carta").style.display = "none";

    document.getElementById("cartaAberta").style.display = "block";

}
function fimDaHistoria() {

    document.getElementById("parte4").scrollIntoView({
        behavior: "smooth"
    });

}
function irParaFinal() {

    document.getElementById("parte5").scrollIntoView({
        behavior: "smooth"
    });

}
