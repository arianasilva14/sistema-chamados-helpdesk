let chamados = [];
JSON.parse(localStorage.getItem("chamados"))
|| [];

function salvar() {
    localStorage.setItem("chamados", JSON.stringify(chamados));
}

function criarChamado() {
    const nome = document.getElementById("nome").value;
    const problema = document.getElementById("problema").value;
    const prioridade = document.getElementById("prioridade").value;

    const chamado = {
        id: Date.now(),
        nome,
        problema,
        prioridade,
        status: "Aberto"

    };

    chamados.push(chamado);
    salvar();

    listarChamados();
}

function listarChamados() {
    const lista = document.getElementById("listaChamados");
    lista.innerHTML = "";

    chamados.forEach(c => {
        let classeStatus = "";

        if (c.status === "Aberto") classeStatus = "aberto";
        else if (c.status === "Em andamento") classeStatus = "andamento";
        else classeStatus = "resolvido";

        lista.innerHTML += `
        <div class= "card ${classeStatus}">
            <strong>${c.nome}</strong><br/>
            <p><b>Problema:</b> ${c.problema}</p>
            <p><b>Prioridade:</b> ${c.prioridade}</p>
            <p class="status"> Status: ${c.status}</p>

            <button onclick= "alterarStatus"(${c.id})">
            Atualizar Status
            </button>
        </div>
        `;
    });

    salvar();
}

function alterarStatus(id) {
    chamados = chamados.map(C =>{
        if (C.id === id) {
            if (C.status === "Aberto") C.status = "Em andamento";
            else if (C.status === "Em andamento") C.status = "Resolvido";
        }
        return C;
    });

    listarChamados();
}

listarChamados();
    lista.innerHTML += `
    <div class= "card">
        <strong>${c.nome}</strong><br/>
        Problema: ${c.problema}<br/>
        Prioridade: ${c.prioridade}<br/>
        Status: ${c.status}

        <button onclick= "alternarStatus(${c.id})">
            Atualizar Status
        </button>
    </div>
    `;
    ;
    salvar();