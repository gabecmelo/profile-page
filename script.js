    // Os comentários foram usados pra ajudar alunos que desejam entender sobre o que o js está fazendo nesse projeto.
    
    // Dados das últimas atividades
    const activitiesData = [
        {
        id: 1,
        date: "10/03/2025",
        type: "Publicação",
        description: "Compartilhou um artigo sobre desenvolvimento web",
        },
        {
        id: 2,
        date: "05/03/2025",
        type: "Comentário",
        description: "Comentou em uma discussão sobre React.js",
        },
        {
        id: 3,
        date: "28/02/2025",
        type: "Publicação",
        description: "Publicou um tutorial sobre TypeScript",
        },
    ]
    
    // Capturando elementos do DOM
    const activitiesTableBody = document.getElementById("activitiesTableBody");
    const contactForm = document.getElementById("contactForm");
    const submitButton = document.getElementById("submitButton");
    const formAlerts = document.getElementById("formAlerts");
    
    /* Função para popular as últimas atividades com os dados previamente estabelecidos, em um cenário de rede social,
    poderia não existir atividades, nesse caso seria renderizado uma tabela sinalizando isso, você pode remover ou 
    comentar as atividades dento da lista caso queira ver esse cenário */
    function populateActivitiesTable() {
        if (activitiesData.length === 0) {
            activitiesTableBody.innerHTML = `
                <tr>
                <td colspan="3" class="text-center">Nenhuma atividade recente encontrada.</td>
                </tr>
            `
            return;
        }
    
        activitiesTableBody.innerHTML = "";
    
        activitiesData.forEach((activity) => {
        const row = document.createElement("tr");
    
        const dateCell = document.createElement("td");
        dateCell.textContent = activity.date;
    
        const typeCell = document.createElement("td");
        const typeBadge = document.createElement("span");
        typeBadge.className = `badge ${activity.type === "Publicação" ? "bg-primary" : "bg-info"}`;
        typeBadge.textContent = activity.type;
        typeCell.appendChild(typeBadge);
    
        const descriptionCell = document.createElement("td");
        descriptionCell.textContent = activity.description;
    
        row.appendChild(dateCell);
        row.appendChild(typeCell);
        row.appendChild(descriptionCell);
    
        activitiesTableBody.appendChild(row);
        })
    }
    
    // Função que inicializa a página, basicamente como se fosse a função "main"
    function initPage() {
        // Preencher tabela de atividades
        populateActivitiesTable();

    }
    
    // Executa a inicialização quando o DOM estiver totalmente carregado
    document.addEventListener("DOMContentLoaded", initPage);
