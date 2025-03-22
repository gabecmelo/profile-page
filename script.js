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
    
    // Handle para a submissão do formulário de contato
    function handleFormSubmit(e) {
        e.preventDefault();
    
        // Capturando os dados do formulário
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value,
        }
    
        // Aqui, geralmente o próprio formulário já valida, mas essa validação é falha, por isso é feita a verificação

        // Validando se o formulário foi prenchido
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            showAlert("Por favor, preencha todos os campos.", "danger");
            return;
        }
    
        // Regex (expressão regular usada para verificar um padrão de uma string, nesse caso o email) pra validar o email.
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (!emailRegex.test(formData.email)) {
            showAlert("Por favor, insira um endereço de email válido.", "danger");
            return;
        }
    
        // Chama a função que mostra que o envio está sendo feito (ela é declarada na linha 144, use "ctrl+click (mb1/botão esquerdo)" pra ir para a função)
        setSubmittingState(true);
    
        // Simula o envio de formulário (seria substituído por chamada de API real)
        setTimeout(() => {
            // Reseta o formulário
            contactForm.reset();
    
            // Mostra mensagem de sucesso (função declarada na linha 127)
            showAlert("Mensagem enviada com sucesso! Entraremos em contato em breve.", "success");
        
            // Reseta estado do botão para o normal
            setSubmittingState(false);
        
            // Limpa mensagem de sucesso após 3 segundos
            setTimeout(() => {
                clearAlerts(); // Função declarada na linha 139
            }, 3000);

        }, 1500);
    }
    
    // Função para mostrar o uma notificação de alerta acima do formulário em casos de erro
    function showAlert(message, type) {
        clearAlerts();
    
        const alertElement = document.createElement("div");
        alertElement.className = `alert alert-${type}`;
        alertElement.role = "alert";
        alertElement.textContent = message;
    
        formAlerts.appendChild(alertElement);
    }
    
    // Função para limpar os alertas
    function clearAlerts() {
        formAlerts.innerHTML = "";
    }
    
    // Função que define o estado de "enviando" para o botão
    function setSubmittingState(isSubmitting) {
        if (isSubmitting) {
        submitButton.disabled = true;
        submitButton.innerHTML = `
            <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Enviando...
        `
        submitButton.classList.add("btn-submitting");
        } else {
        submitButton.disabled = false;
        submitButton.textContent = "Enviar Mensagem";
        submitButton.classList.remove("btn-submitting");
        }
    }
    
    // Função que inicializa a página, basicamente como se fosse a função "main"
    function initPage() {
        // Preencher tabela de atividades
        populateActivitiesTable();
    
        // Adicionar um escutador de evento para envio de formulário, acho que ainda n foi ensinado =D foi mal fessor
        contactForm.addEventListener("submit", handleFormSubmit);
    }
    
    // Executa a inicialização quando o DOM estiver totalmente carregado
    document.addEventListener("DOMContentLoaded", initPage);
