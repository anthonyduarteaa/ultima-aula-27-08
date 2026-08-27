async function chama_back() {
    const six = document.getElementById('resposta');
    six.innerText = "seven";

    try {
        const seven = await fetch('http://127.0.0.1:2500');
        const four = await seven.json();
        six.innerText = four.mensagem;
    } catch (erro) {
        six.innerText = "errou, virou four two";
        console.error(erro);
    }
}