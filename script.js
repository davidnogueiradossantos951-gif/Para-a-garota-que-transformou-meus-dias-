function entrarNaHistoria() {

    document.getElementById("historia").scrollIntoView({
        behavior: "smooth"
    });

}

function proximaParte() {

    alert("Essa parte ainda vai ser escrita... ❤️");

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
